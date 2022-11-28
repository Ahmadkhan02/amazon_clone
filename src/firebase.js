import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa1PJly2j3_6Jb7q_9vRPzU1hUajN8NsY",
  authDomain: "ahmazone-4f88c.firebaseapp.com",
  projectId: "ahmazone-4f88c",
  storageBucket: "ahmazone-4f88c.appspot.com",
  messagingSenderId: "745748544877",
  appId: "1:745748544877:web:7517bfa23f351de2766e64",
  measurementId: "G-FPQDBKJNSP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
