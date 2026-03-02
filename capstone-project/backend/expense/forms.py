from django import forms
from .models import Expense, Category

class ExpenseForm(forms.ModelForm):
    class Meta:
        model = Expense
        fields = ['amount', 'date', 'category', 'description']
        widgets = {
            'amount': forms.NumberInput(attrs={
                'placeholder': 'Amount',
                'required': True,
                'step': '0.01'
            }),
            'date': forms.DateInput(attrs={
                'type': 'date',
                'required': True
            }),
            'category': forms.Select(attrs={
                'required': True
            }),
            'description': forms.Textarea(attrs={
                'placeholder': 'Description (optional)',
                'rows': 3,
                'required': False
            }),
        }


class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = ['name']
        widgets = {
            'name': forms.TextInput(attrs={
                'placeholder': 'Category Name',
                'required': True
            }),
        }