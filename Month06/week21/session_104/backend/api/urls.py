from django.urls import path
from . import views

urlpatterns = [
    path('test/', views.test_middleware, name='test_middleware'),
    path('csrf/', views.csrf_token_view, name='csrf_token'),
]