from tasks.models import Task
from rest_framework import serializers
 
class TaskSerializer(serializers.ModelSerializer):
    """
    Serializing all tasks
    """
    class Meta:
        model = Task
        fields = ('pk','title', 'desc','assignee','assigned_to','due_date')
