
import firebase from "firebase/app";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyA66uiRT_npen_dOyBf0ne81eKYqZ_CKxo",
    authDomain: "seungs-solution.firebaseapp.com",
    databaseURL: "https://seungs-solution-default-rtdb.firebaseio.com",
    projectId: "seungs-solution",
    storageBucket: "seungs-solution.appspot.com",
    messagingSenderId: "357600281790",
    appId: "1:357600281790:web:96e2a3ee0dd79c757b8aef",
    measurementId: "G-ZH48QV1KY8" 
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();
