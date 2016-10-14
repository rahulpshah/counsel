angular.module('app.services', [])
.run(function(){
  var config = {
      apiKey: "AIzaSyCAAITOFc7ivO2qHvDCBdx_fHWEHJj6Yfk",
      authDomain: "lexisnexishackathon.firebaseapp.com",
      databaseURL: "https://lexisnexishackathon.firebaseio.com",
      storageBucket: "lexisnexishackathon.appspot.com",
      messagingSenderId: "429670093553"
    };

    firebase.initializeApp(config);
})

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])
.service('Events', ['$firebaseArray',function($firebaseArray){


  var ref = firebase.database().ref().child("calendar_event");
  var items = $firebaseArray(ref);
  var events = {
    'items' : items
  }
  return events;
}])
.service('Matters', ['$firebaseArray', function($firebaseArray){
  
  var ref = firebase.database().ref().child("matter");
  var items = $firebaseArray(ref);
  var matters = {
    'items' : items
  }
  return matters;
}])
