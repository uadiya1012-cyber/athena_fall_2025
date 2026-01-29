from django.urls import path
from .import views

app_name = 'gallery'

urlpatterns = [
    path('', views.gallery, name='index'),
    path('upload/', views.upload_image, name='upload'),
    path('delete/<int:image_id>/', views.delete_image, name='delete'),
]