from django.conf.urls import url
from tasks.views import TaskList, TaskDetails
 
urlpatterns = (
    url(r'^task/$', TaskList.as_view(), name="task-list"),
    url(r'^task/(?P<pk>[0-9]+)$', TaskDetails.as_view(), name="task-details"),
)
