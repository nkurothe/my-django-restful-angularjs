(function() {
var app= angular.module('asana',[]);
    console.log('in');
    app.controller('TaskController',['$http',function($http){
	    var control = this;
	    control.tasks = [];
	    $http.get('http://127.0.0.1:8000/tasks/task/').success(function(data){ //url of the api
	      control.tasks = data;
	    });
	  }]);

    app.controller('CreateTask',['$scope', '$http', function($scope, $http){
	this.addTask=function(taskc){
	if ($scope.newtask.task.due_date=="")
	{
		$scope.newtask.task.due_date=null;
	}
	var dataobj = {
				title : $scope.newtask.task.title,
				desc : $scope.newtask.task.desc,
				assigned_to : $scope.newtask.task.assigned_to,
				assignee : $scope.newtask.task.assignee,
				due_date : $scope.newtask.task.due_date
		};
	var res=$http.post('http://127.0.0.1:8000/tasks/task/',dataobj)
	res.success(function(data, status, headers, config) {
			task={}
			task['pk']=data.pk;
			task['title']=data.title;
			task['desc']=data.desc;
			task['assigned_to']=data.assigned_to;
			task['assignee']=data.assignee;
			task['due_date']=data.due_date;
			taskc.tasks.push(task);
		});
	res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
		});
        
	$scope.title='';
	$scope.desc='';
	$scope.assigned_to="";
	$scope.assignee="";
	$scope.due_date="";
	$scope.newtask.task={};	
	};
	}]);

    app.controller('DeleteTask',['$scope','$http',function($scope,$http){
	this.delTask=function(taskc,task){
	var res=$http.delete('http://127.0.0.1:8000/tasks/task/'+task.pk);
	res.success(function(data, status, headers, config) {
		//logic to remove from listing TODO: Not very efficient
		for(i=0;i<taskc.tasks.length;i++)
		{
			if(taskc.tasks[i].pk==task.pk)
			{
				taskc.tasks.splice(i,1);
				break;
			}
		}
                });
	res.error(function(data, status, headers, config) {
                        alert( "failure message: " + JSON.stringify({data: data}));
                });
	
	}	
    }]);

    app.controller('UpdateTask',['$scope','$http',function($scope,$http){
	this.updateTask=function(taskc,task){
	if (task.due_date=="")
	{
		task.due_date=null;
	}

	var dataobj = {
                                title : task.title,
                                desc : task.desc,
                                assigned_to : task.assigned_to,
                                assignee : task.assignee,
                                due_date : task.due_date
                };
	var res=$http.put('http://127.0.0.1:8000/tasks/task/'+task.pk,dataobj);
	res.success(function(data, status, headers, config) {
		$("#"+task.pk).modal('hide');
                });
        res.error(function(data, status, headers, config) {
                        alert( "failure message: " + JSON.stringify({data: data}));
                });
	}
    }]);

    
})();
