# views.py
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from .models import Product
from .serializers import ProductSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category', 'in_stock']
    search_fields = ['name', 'description']
    ordering_fields = ['price', 'name', 'created_at']
    ordering = ['-created_at']  # Default ordering by newest first

search_fields = [
    'name',           # Exact match
    '^name',          # Starts with
    '=name',          # Exact match
    '@name',          # Full-text search (requires PostgreSQL)
    '$name',          # Regex search
]
