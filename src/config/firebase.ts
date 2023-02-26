    // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZbausRou1DyHqkD9xJrGb4WSQyqoUTlg",
  authDomain: "react-course-53526.firebaseapp.com",
  projectId: "react-course-53526",
  storageBucket: "react-course-53526.appspot.com",
  messagingSenderId: "372169391055",
  appId: "1:372169391055:web:fe3ef60f5eaa6e52b3b0ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//setup google authentication
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)