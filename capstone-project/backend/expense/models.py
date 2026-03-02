from django.db import models

class Expense(models.Model):
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()
    category = models.ForeignKey(
        'Category',
        on_delete=models.CASCADE,
        related_name='expenses'
    )
    description = models.TextField(blank=True)

    def __str__(self):
        return f"{self.category.name} - {self.amount} on {self.date}"

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    def __str__(self):
        return self.name
