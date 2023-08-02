import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7nRUggTj7Fdxuvxof2UvF-MphCM8zAeo",
  authDomain: "recruitment-app-278de.firebaseapp.com",
  projectId: "recruitment-app-278de",
  storageBucket: "recruitment-app-278de.appspot.com",
  messagingSenderId: "818407576804",
  appId: "1:818407576804:web:7d296bb4204398044fc8f1",
  measurementId: "G-J9QP7VKSBV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
