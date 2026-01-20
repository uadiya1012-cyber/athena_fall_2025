from django.db import models

class Post(models.Model): 
    title = models.CharField(max_length=200) # varchar field with max length 200
    content = models.TextField()  # text field for large text content
    created_at = models.DateTimeField(auto_now_add=True) # timestamp when created (date)
    updated_at = models.DateTimeField(auto_now=True) # timestamp when updated (date)
    published = models.BooleanField(default=False) # boolean field for published status (true/false) tiny int(1)

    def __str__(self):
        return self.title
    

class Product(models.Model):
    # Text fields
    name = models.CharField(max_length=100)
    description = models.TextField()

    # Number fields
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()

    # Boolean
    is_active = models.BooleanField(default=True)

    # Date/Time
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)



