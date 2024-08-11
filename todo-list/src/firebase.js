// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcEmsyVhSl0hNqK1DDzJdr-Leh91PxhX0",
  authDomain: "todo-app-d7579.firebaseapp.com",
  projectId: "todo-app-d7579",
  storageBucket: "todo-app-d7579.appspot.com",
  messagingSenderId: "250358704697",
  appId: "1:250358704697:web:2ba195436c3718164a7be8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);