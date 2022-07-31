import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAnqwBk2OJAmNlEFsR78ne8dEYp_qLi-_c",
    authDomain: "chat-app-7abb1.firebaseapp.com",
    projectId: "chat-app-7abb1",
    storageBucket: "chat-app-7abb1.appspot.com",
    messagingSenderId: "392240388268",
    appId: "1:392240388268:web:f69a34ee669130dbb7e709"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();