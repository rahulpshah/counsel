angular.module('app.services', [])
    .service('Events', ['$firebaseArray', function ($firebaseArray) {

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
            'items': items,
            'addEvent': function (event) {
                items.$add(event);
            }
        }
        return events;
    }]);
