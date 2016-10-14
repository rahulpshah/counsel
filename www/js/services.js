angular.module('app.services', [])
    .run(function () {
        var config = {
            apiKey: "AIzaSyCAAITOFc7ivO2qHvDCBdx_fHWEHJj6Yfk",
            authDomain: "lexisnexishackathon.firebaseapp.com",
            databaseURL: "https://lexisnexishackathon.firebaseio.com",
            storageBucket: "lexisnexishackathon.appspot.com",
            messagingSenderId: "429670093553"
        };
        firebase.initializeApp(config);
    })
    .service('Events', ['$firebaseArray', function ($firebaseArray) {

        var ref = firebase.database().ref().child("calendar_event");

        var items = $firebaseArray(ref);
        var events = {
            'items': items,
            'addEvent': function (event) {
                items.$add(event);
            }
        }
        return events;
    }])

.service('EventTypes', ['$firebaseArray', function ($firebaseArray) {

    var ref = firebase.database().ref().child("calendar_event_types");

    var items = $firebaseArray(ref);
    var event_types = {
        'items': items,
    }
    return event_types;
}])
    .service('Matters', ['$firebaseArray', function($firebaseArray){

        var ref = firebase.database().ref().child("matter");

        var items = $firebaseArray(ref);
        console.log(items);
        var matters = {
            'items' : items,
            'addMatter': function (matter) {
                items.$add(matter);
            }
        }

        return matters;
    }]);
