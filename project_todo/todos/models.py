from django.db import models


class Todo(models.Model):
	"""A simple Todo model matching the requested schema.

	Fields:
	- id: auto-generated integer primary key
	- title: string
	- is_done: boolean
	- created_at: datetime (auto now add)
	- updated_at: datetime (auto now)
	"""
	title = models.CharField(max_length=255)
	is_done = models.BooleanField(default=False)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

	def __str__(self) -> str:
		return f"{self.title} ({'done' if self.is_done else 'pending'})"


