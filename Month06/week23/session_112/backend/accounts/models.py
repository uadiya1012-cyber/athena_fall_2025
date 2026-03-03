from django.db import models

class UserProfile(models.Model):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField()
    role = models.CharField(max_length=50, default='Student')
    avatar_url = models.URLField(blank=True, default='')
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.username