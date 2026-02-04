from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView, DetailView
from django.http import JsonResponse
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Category, Post, Comment
from .serializers import (
    CategorySerializer,
    PostListSerializer,
    PostDetailSerializer,
    CommentCreateSerializer
)


# ============================================================
# SSR Views - Django Templates ашиглах
# ============================================================

class HomeView(ListView):
    """Нүүр хуудас - SSR"""
    model = Post
    template_name = 'core/home.html'
    context_object_name = 'posts'
    paginate_by = 6

    def get_queryset(self):
        return Post.objects.filter(status='published').select_related('author', 'category')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['categories'] = Category.objects.all()
        context['featured_posts'] = Post.objects.filter(
            status='published'
        ).order_by('-views')[:3]
        return context


class PostDetailView(DetailView):
    """Нийтлэлийн дэлгэрэнгүй - SSR"""
    model = Post
    template_name = 'core/post_detail.html'
    context_object_name = 'post'
    slug_field = 'slug'
    slug_url_kwarg = 'slug'

    def get_queryset(self):
        return Post.objects.filter(status='published').select_related('author', 'category')

    def get_object(self):
        obj = super().get_object()
        obj.increment_views()  # Үзсэн тоог нэмэх
        return obj

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['comments'] = self.object.comments.filter(is_approved=True)
        context['related_posts'] = Post.objects.filter(
            category=self.object.category,
            status='published'
        ).exclude(id=self.object.id)[:3]
        return context


class CategoryView(ListView):
    """Ангилалаар шүүх - SSR"""
    model = Post
    template_name = 'core/category.html'
    context_object_name = 'posts'
    paginate_by = 9

    def get_queryset(self):
        self.category = get_object_or_404(Category, slug=self.kwargs['slug'])
        return Post.objects.filter(
            category=self.category,
            status='published'
        ).select_related('author')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['category'] = self.category
        context['categories'] = Category.objects.all()
        return context


def search_view(request):
    """Хайлт - SSR"""
    query = request.GET.get('q', '')
    posts = []

    if query:
        posts = Post.objects.filter(
            status='published',
            title__icontains=query
        ) | Post.objects.filter(
            status='published',
            content__icontains=query
        )
    else:
        return HomeView.as_view()(request)

    return render(request, 'core/search.html', {
        'posts': posts.distinct(),
        'query': query,
        'categories': Category.objects.all()
    })


# ============================================================
# API Views - REST Framework
# ============================================================

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """Ангилалын API"""
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    lookup_field = 'slug'


class PostViewSet(viewsets.ReadOnlyModelViewSet):
    """Нийтлэлийн API"""
    queryset = Post.objects.filter(status='published')
    lookup_field = 'slug'

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return PostDetailSerializer
        return PostListSerializer

    def get_queryset(self):
        queryset = super().get_queryset()

        # Category filter
        category = self.request.query_params.get('category')
        if category:
            queryset = queryset.filter(category__slug=category)

        # Search
        search = self.request.query_params.get('search')
        if search:
            queryset = queryset.filter(title__icontains=search)

        return queryset.select_related('author', 'category')

    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Онцлох нийтлэлүүд"""
        featured = self.get_queryset().order_by('-views')[:5]
        serializer = PostListSerializer(featured, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def add_comment(self, request, slug=None):
        """Сэтгэгдэл нэмэх"""
        post = self.get_object()
        data = request.data.copy()
        data['post'] = post.id

        serializer = CommentCreateSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {'message': 'Сэтгэгдэл илгээгдлээ. Баталгаажуулалт хүлээнэ.'},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
