// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvE4_3rXFb2JrPAYbXkCjis8OzfYF9Omw",
  authDomain: "vite-contact-app1.firebaseapp.com",
  projectId: "vite-contact-app1",
  storageBucket: "vite-contact-app1.appspot.com",
  messagingSenderId: "819368750065",
  appId: "1:819368750065:web:e7bb83089b0dd6ae1c7250"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);