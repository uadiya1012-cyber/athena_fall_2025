from django.db import models
from django.contrib.auth.models import User


class Category(models.Model):
    """Ангилал"""
    name = models.CharField(max_length=100, verbose_name="Нэр")
    slug = models.SlugField(unique=True)
    description = models.TextField(blank=True, verbose_name="Тайлбар")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Ангилал"
        verbose_name_plural = "Ангилалууд"
        ordering = ['name']

    def __str__(self):
        return self.name


class Post(models.Model):
    """Нийтлэл"""
    STATUS_CHOICES = [
        ('draft', 'Ноорог'),
        ('published', 'Нийтлэгдсэн'),
    ]

    title = models.CharField(max_length=200, verbose_name="Гарчиг")
    slug = models.SlugField(unique=True)
    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='posts',
        verbose_name="Зохиогч"
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.SET_NULL,
        null=True,
        related_name='posts',
        verbose_name="Ангилал"
    )
    content = models.TextField(verbose_name="Агуулга")
    excerpt = models.TextField(max_length=300, blank=True, verbose_name="Товч")
    featured_image = models.URLField(blank=True, verbose_name="Зураг URL")
    status = models.CharField(
        max_length=10,
        choices=STATUS_CHOICES,
        default='draft',
        verbose_name="Төлөв"
    )
    views = models.PositiveIntegerField(default=0, verbose_name="Үзсэн тоо")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Нийтлэл"
        verbose_name_plural = "Нийтлэлүүд"
        ordering = ['-created_at']

    def __str__(self):
        return self.title

    def increment_views(self):
        self.views += 1
        self.save(update_fields=['views'])


class Comment(models.Model):
    """Сэтгэгдэл"""
    post = models.ForeignKey(
        Post,
        on_delete=models.CASCADE,
        related_name='comments'
    )
    author_name = models.CharField(max_length=100, verbose_name="Нэр")
    author_email = models.EmailField(verbose_name="Имэйл")
    content = models.TextField(verbose_name="Сэтгэгдэл")
    is_approved = models.BooleanField(default=False, verbose_name="Батлагдсан")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Сэтгэгдэл"
        verbose_name_plural = "Сэтгэгдлүүд"
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.author_name} - {self.post.title[:30]}"
