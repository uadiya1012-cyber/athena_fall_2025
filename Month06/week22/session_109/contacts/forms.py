from django import forms
from .models import Contact

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = ['name', 'email', 'phone']
        widgets = {
            'name': forms.TextInput(attrs={
                'placeholder': 'Name',
                'required': True
            }),
            'email': forms.EmailInput(attrs={
                'placeholder': 'Email',
                'required': True
            }),
            'phone': forms.TextInput(attrs={
                'placeholder': 'Phone (optional)',
                'required': False
            }),
        }