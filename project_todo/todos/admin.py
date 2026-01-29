from django.contrib import admin
from .models import Todo


# Register Todo model so it appears in the Django admin site
@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
	list_display = ('title', 'is_done', 'created_at', 'updated_at')
	list_filter = ('is_done', 'created_at')
	search_fields = ('title',)
