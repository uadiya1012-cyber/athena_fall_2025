from django.contrib import admin
from .models import Post

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'created_at', 'published']
    list_filter = ['published', 'created_at']
    search_fields = ['title']

# @admin.register(Post)
# class PostAdmin(admin.ModelAdmin):
#     list_display = []
#     list_filter = []
#     search_fields = []
