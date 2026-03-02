from django.urls import path
from . import views

urlpatterns = [
    # Expense CRUD (HTMX)
    path('', views.expense_list, name='expense_list'),
    path('create/', views.create_expense, name='create_expense'),
    path('<int:pk>/edit/', views.edit_expense, name='edit_expense'),
    path('<int:pk>/update/', views.update_expense, name='update_expense'),
    path('<int:pk>/delete/', views.delete_expense, name='delete_expense'),


    # Category CRUD (HTMX)
    path('categories/', views.category_list, name='category_list'),
    path('categories/create/', views.create_category, name='create_category'),
    path('categories/<int:pk>/edit/', views.edit_category, name='edit_category'),
    path('categories/<int:pk>/update/', views.update_category, name='update_category'),
    path('categories/<int:pk>/delete/', views.delete_category, name='delete_category'),
]