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


  var items = $firebaseArray(ref);
  var events = {
    'items' : items
  }
  ref.child('calendar_event').once('value').then(function(data){
    //do this whenever data is loaded
    console.log(data);
  });
  return events;
}])
.service('Matters', ['$firebaseArray',function($firebaseArray){
  console.log("ASdasd");
  var config = {
    apiKey: "AIzaSyCAAITOFc7ivO2qHvDCBdx_fHWEHJj6Yfk",
    authDomain: "lexisnexishackathon.firebaseapp.com",
    databaseURL: "https://lexisnexishackathon.firebaseio.com",
    storageBucket: "lexisnexishackathon.appspot.com",
    messagingSenderId: "429670093553"
  };

  firebase.initializeApp(config);

  var ref = firebase.database().ref().child("matter");
  

  var items = $firebaseArray(ref);
  console.log(items);
  var matters = {
    'items' : items
  }
  ref.child('matter').once('value').then(function(data){
    //do this whenever data is loaded
    console.log(data);
  });
  return matters;
}])
