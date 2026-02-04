from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

# API Router
router = DefaultRouter()
router.register(r'categories', views.CategoryViewSet, basename='category')
router.register(r'posts', views.PostViewSet, basename='post')

urlpatterns = [
    # SSR Views
    path('', views.HomeView.as_view(), name='home'),
    path('post/<slug:slug>/', views.PostDetailView.as_view(), name='post_detail'),
    path('category/<slug:slug>/', views.CategoryView.as_view(), name='category'),
    path('search/', views.search_view, name='search'),

    # API
    path('api/', include(router.urls)),
]
