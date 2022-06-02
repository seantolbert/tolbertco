import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxn7gBPz8714aEdF8pvp9GwasDg8XsmE4",
  authDomain: "tolbertco.firebaseapp.com",
  projectId: "tolbertco",
  storageBucket: "tolbertco.appspot.com",
  messagingSenderId: "173423175986",
  appId: "1:173423175986:web:fc8af916a31c6aeecdcf2b",
  measurementId: "G-6YWBXWVRWK",
};

//   initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize firestore
const projectFirestore = firebase.firestore();

export { projectFirestore };
