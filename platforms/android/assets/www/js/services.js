angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])
.service('Events', ['$firebaseArray',function($firebaseArray){

  var config = {
  apiKey: "AIzaSyCAAITOFc7ivO2qHvDCBdx_fHWEHJj6Yfk",
  authDomain: "lexisnexishackathon.firebaseapp.com",
  databaseURL: "https://lexisnexishackathon.firebaseio.com",
  storageBucket: "lexisnexishackathon.appspot.com",
  messagingSenderId: "429670093553"
  };
  firebase.initializeApp(config);

  var ref = firebase.database().ref().child("calendar_event");


    // var items = [
    //   {
    //     name:"rhaul",
    //     id:"1"
    //   },
    //   {
    //     name:"moharnab",
    //     id:"2"
    //   }
    // ];

    var items = $firebaseArray(ref);
    var events = {
      'items' : items
    }
    return events;
}]);