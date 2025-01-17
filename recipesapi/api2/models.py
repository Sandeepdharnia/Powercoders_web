from csv import writer
from django.db import models

# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=255)
    ingredients = models.TextField()
    prepare_process = models.TextField()
    serve = models.TextField()
    writer = models.CharField(max_length=255)  # Ensure this field exists
    type = models.CharField(max_length=255)
    added_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name