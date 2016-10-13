function convert(epoch_time){
	
}
angular.module('app.controllers', [])

.controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('mattersCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('eventsCtrl',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

function ($scope, $stateParams, Events) {
	//console.log("here's my data", Events.items);
	console.log(Events.items);
	console.log(typeof (Events.items));
	$scope.events = Events.items;

	//Code to convert epoch to date time
	console.log(typeof $scope.events);
	console.log(Events.items.length);
	/*
	for(var i=0;i<$scope.events.length;i++)
	{
		console.log("Asd");
		$scope.events[i].due_date = convert($scope.events[i].due_date)
		$scope.events[i].start_date = convert($scope.events[i].start_date)
		$scope.events[i].end_date = convert($scope.events[i].end_date)
		 
	}*/

	//Accordion Code
	$scope.toggleEvent = function(event) {
    if ($scope.isEventShown(event)) {
      $scope.shownEvent = null;
    } else {
      $scope.shownEvent = event;
    }
  };
  $scope.isEventShown = function(event) {

    return $scope.shownEvent === event;
  };
  $scope.convert = function(x)
  {
  	console.log("hello")
	var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
	d.setUTCSeconds(x);
	return d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
  }
})

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('matterCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('noteCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])



var wait = function() {
    var deferred = $q.defer();
    setTimeout(function() {
      // Reject 3 out of 10 times to simulate 
      // some business logic.
      if (Math.random() > 0.7) deferred.reject('hell');
      else deferred.resolve('world');
    }, 1000);
    return deferred.promise;
  };
