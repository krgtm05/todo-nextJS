// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzV3pGtvMFOwTwBzrbtfS1-UvcvU7P7wg",
  authDomain: "todolist-c9e61.firebaseapp.com",
  projectId: "todolist-c9e61",
  storageBucket: "todolist-c9e61.appspot.com",
  messagingSenderId: "617138690327",
  appId: "1:617138690327:web:cbef6c547987ff0f3eff52",
  measurementId: "G-QTB568HY17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();