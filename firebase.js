const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// import firebase from "firebase/app";
// import 'firebase/firestore';
import "firebase/analytics";

var firebaseConfig = {
  apiKey: "AIzaSyDsLHaE0_FZ90ruFxBbiJYNqbD5jlgpkaI",
  authDomain: "poketype-e2fc5.firebaseapp.com",
  databaseURL: "https://poketype-e2fc5.firebaseio.com",
  projectId: "poketype-e2fc5",
  storageBucket: "poketype-e2fc5.appspot.com",
  messagingSenderId: "256451842027",
  appId: "1:256451842027:web:bf58b2c2be2fbb2cf0d3ae",
  measurementId: "G-9X71VQ784S",
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// Check that 'window' is in scope for the analytics module
if (typeof window !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  // To enable analytics.
  if ("measurementId" in firebaseConfig) firebase.analytics();
}

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

var db = firebase.firestore();
export default db;

// const fire = firebase;
// export default fire;

// export default firebase;
