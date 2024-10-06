// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFdmjvuaK1Go63CCqN3fW99OZOcpM8Etk",
  authDomain: "netflixgpt-786.firebaseapp.com",
  projectId: "netflixgpt-786",
  storageBucket: "netflixgpt-786.appspot.com",
  messagingSenderId: "1074565045359",
  appId: "1:1074565045359:web:18278497127ad834a8819a",
  measurementId: "G-9R45YL7EY3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
