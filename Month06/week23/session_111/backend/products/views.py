# views.py
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from .models import Product
from .serializers import ProductSerializer
from .pagination import StandartPagination
from .throttles import BurstRateThrottle, SustainedRateThrottle
from rest_framework.throttling import UserRateThrottle

class CreateRateThrottle(UserRateThrottle):
    rate = '10/hour'

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_throttles(self):
        if self.action == 'create':
            return [CreateRateThrottle()]
        return super().get_throttles()

    pagination_class = StandartPagination
    throttle_classes = [BurstRateThrottle, SustainedRateThrottle]
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
