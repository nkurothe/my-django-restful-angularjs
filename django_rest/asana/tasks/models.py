from django.db import models

# Create your models here.

class Task(models.Model):
    title = models.CharField(max_length=100)
    desc = models.CharField(max_length=150)
    assignee = models.CharField(max_length=100)
    assigned_to = models.CharField(max_length=50)
    due_date = models.DateTimeField(null=True,blank=True)
