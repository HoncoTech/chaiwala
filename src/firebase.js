// src.firebase.js
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB9ifjendF6zB1h23Z78o2LOs8Psj4EdIw",
    authDomain: "choti-chaiwala.firebaseapp.com",
    projectId: "choti-chaiwala",
    storageBucket: "choti-chaiwala.appspot.com",
    messagingSenderId: "705463075236",
    appId: "1:705463075236:web:0abb7bd65d93eaaf8c4131",
    measurementId: "G-DL5FLYBSYM"
  };

  // Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {auth}