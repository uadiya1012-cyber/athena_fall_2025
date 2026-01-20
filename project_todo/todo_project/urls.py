
from django.contrib import admin
from django.urls import path, include
from todos import views as todos_views

urlpatterns = [
    path('', todos_views.index, name='home'),
    path('admin/', admin.site.urls),
]
