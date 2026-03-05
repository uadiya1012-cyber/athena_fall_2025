from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [

    path('', auth_views.LoginView.as_view(template_name='registration/login.html', redirect_authenticated_user=True), name='login'),

    path('register/', views.register, name='register'),

    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('dashboard/', views.employee_dashboard, name='employee_dashboard'),
    path('manager/', views.manager_dashboard, name='manager_dashboard'),
]