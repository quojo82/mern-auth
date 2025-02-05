// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRBASE_API_KEY,
  authDomain: "mern-auth-web-app.firebaseapp.com",
  projectId: "mern-auth-web-app",
  storageBucket: "mern-auth-web-app.firebasestorage.app",
  messagingSenderId: "1085202909487",
  appId: "1:1085202909487:web:37f874144a69625be2b9da",
  measurementId: "G-D7N6XM17SH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
