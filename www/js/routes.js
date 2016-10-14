angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.profile', {
    url: '/profile',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('menu.matters', {
    url: '/matters',
    views: {
      'side-menu21': {
        templateUrl: 'templates/matters.html',
        controller: 'mattersCtrl'
      }
    }
  })

  .state('menu.events', {
    url: '/events',
    views: {
      'side-menu21': {
        templateUrl: 'templates/events.html',
        controller: 'eventsCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.matter', {
    url: '/matter/:item',
    views: {
      'side-menu21': {
        templateUrl: 'templates/matter.html',
        controller: 'matterCtrl'
      }
    }
  })

  .state('note', {
    url: '/note/:item',
    templateUrl: 'templates/note.html',
    controller: 'noteCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/profile')

  

});