# models.py
from django.db import models

class Product(models.Model):
    CATEGORY_CHOICES = [
        ('electronics', 'Electronics'),
        ('clothing', 'Clothing'),
        ('books', 'Books'),
    ]

    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    in_stock = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)





# Usage:
# GET /api/products/?category=electronics
# GET /api/products/?in_stock=true
# GET /api/products/?category=electronics&in_stock=true