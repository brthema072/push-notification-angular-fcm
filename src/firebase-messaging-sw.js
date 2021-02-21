importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.24.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyB4KARaUsIiVppahfOguffN3PDwMAO8D9A",
    authDomain: "angular-fcm-c921a.firebaseapp.com",
    projectId: "angular-fcm-c921a",
    storageBucket: "angular-fcm-c921a.appspot.com",
    messagingSenderId: "740494548893",
    appId: "1:740494548893:web:07e4c433618b9854e01974",
    measurementId: "G-SGF5CVX636"

});

const messaging = firebase.messaging();