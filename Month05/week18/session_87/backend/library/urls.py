from django.urls import path
from . import views

app_name = 'library'

urlpatterns = [
    path('posts/', views.post_list, name='post_list'),
]