// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwMnHRc1Um9v0B7I6M26K4ny8fjlq_2hQ",
  authDomain: "dragon-newspaper-5879d.firebaseapp.com",
  projectId: "dragon-newspaper-5879d",
  storageBucket: "dragon-newspaper-5879d.firebasestorage.app",
  messagingSenderId: "46776549201",
  appId: "1:46776549201:web:667a208d8d0fd69a7d9d70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
