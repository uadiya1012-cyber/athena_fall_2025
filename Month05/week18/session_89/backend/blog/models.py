from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200, verbose_name='Гарчиг')
    content = models.TextField(verbose_name='Агуулга')
    author = models.CharField(max_length=100, verbose_name='Зохиогч')
    views = models.PositiveIntegerField(default=0, verbose_name='Үзэлт')
    published = models.BooleanField(default=False, verbose_name='Нийтэлсэн')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Үүсгэсэн огноо')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Шинэчилсэн')





