from django.shortcuts import render
from tasks.models import Task
from rest_framework import generics
from tasks.serializers import TaskSerializer

# Create your views here.

class TaskMixin:
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
 
 
class TaskList(TaskMixin, generics.ListCreateAPIView):
    """
    Returns list of all tasks or create new authors
    """
    pass
 
 
class TaskDetails(TaskMixin, generics.RetrieveUpdateDestroyAPIView):
    """
    Returns a specific author, updates it or deletes it.
    """
    pass
