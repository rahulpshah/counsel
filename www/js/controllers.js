angular.module('app.controllers', [])

.controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])


.controller('eventsCtrl',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

function ($scope, $stateParams, Events) {
    //var promise = DataFetch.myFunc();
    $scope.events = Events.items;
    console.log($scope.events);
    // Accordion Code
    $scope.toggleEvent = function(event) {
        if ($scope.isEventShown(event)) {
          $scope.shownEvent = null;
        } 
        else 
        {
          $scope.shownEvent = event;
        }
    };
    $scope.isEventShown = function(event) {
        return $scope.shownEvent === event;
    };
    // Code to convert epoch to date time
    $scope.convert = function(x){
        var d = new Date(0);
        d.setUTCSeconds(x);
        return d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
    }
})

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('mattersCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Matters) {

    $scope.matters = Matters.items;
    // Accordion Code
    $scope.toggleMatter = function(matter) {


        if ($scope.isMatterShown(matter)) {
          $scope.shownMatter = null;
        } 
        else 
        {
          $scope.shownMatter = matter;
        }
    };
    $scope.isMatterShown = function(matter) {
        
        return $scope.shownMatter === matter;
    };
    
    $scope.convert = function(x){
        var d = new Date(0);
        d.setUTCSeconds(x);
        return d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
    }
})

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