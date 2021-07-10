import * as firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyACRIndP6hPtiifOo0l_kWz9qfk2NEzCPQ",
    authDomain: "portal-cliente-590be.firebaseapp.com",
    projectId: "portal-cliente-590be",
    storageBucket: "portal-cliente-590be.appspot.com",
    messagingSenderId: "788260351477",
    appId: "1:788260351477:web:2e02f629390b281553c4bc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {auth};
export {db};
/*
export default {
  auth,
  firebase,
  db
};*/
