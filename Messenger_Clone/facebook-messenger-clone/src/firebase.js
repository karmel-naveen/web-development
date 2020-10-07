import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyBVL3OmFbGsVz7yQHOBL3bqVocEv5Afihg",
    authDomain: "facebook-messenger-clone-cea71.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-cea71.firebaseio.com",
    projectId: "facebook-messenger-clone-cea71",
    storageBucket: "facebook-messenger-clone-cea71.appspot.com",
    messagingSenderId: "1007216845765",
    appId: "1:1007216845765:web:4ff2e1db68908ab1ae61ac",
    measurementId: "G-5HW3SMLLRW"
});

const db = firebaseApp.firestore();

export default db;