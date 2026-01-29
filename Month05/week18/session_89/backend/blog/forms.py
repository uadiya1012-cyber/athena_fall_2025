from django import forms
from .models import Post

class PostForm(forms.ModelForm):

    class Meta:
        model = Post
        fields = ['title', 'content', 'author', 'published']

        widgets = {
            'title': forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'placeholder': 'Гарчиг өгнө үү'
                }
            ),
            'content': forms.Textarea(
                attrs={
                    'class': 'form-control',
                    'rows': 8,
                    'placeholder': 'Агуулга...'
                }
            ),
            'author': forms.TextInput(
                attrs={
                    'class': 'form-control',
                    'placeholder': 'Зохиогчийн нэр'
                }
            ),
            'published': forms.CheckboxInput(
                attrs={
                    'class': 'form-check-input'
                }
            )
        }

        labels = {
            'title': 'Гарчиг',
            'content': 'Агуулга',
            'author': 'Зохиогч',
            'published': 'Нийтлэх'
        }