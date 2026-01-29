from django.db import models


class Todo(models.Model):
	title = models.CharField(max_length=255)
	is_done = models.BooleanField(default=False)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	def __str__(self) -> str:
		return f"{self.title} ({'done' if self.is_done else 'pending'})"
	