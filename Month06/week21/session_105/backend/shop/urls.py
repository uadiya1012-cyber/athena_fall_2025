from django.urls import path
from . import views

urlpatterns = [
    path("products/", views.products, name='products'),
    path("cart/", views.cart, name='cart'),
    path("cart/add/", views.cart_add, name='cart_add'),
    path("cart/remove/", views.cart_remove, name='cart_remove'),
    path("cart/clear/", views.cart_clear, name='cart_clear'),
    path("csrf/", views.csrf, name='csrf'),
]
