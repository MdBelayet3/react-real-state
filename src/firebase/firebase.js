// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUVyp6PdrTtl6JORu3I1CFhSa69kVld_Y",
  authDomain: "react-real-state-55e9b.firebaseapp.com",
  projectId: "react-real-state-55e9b",
  storageBucket: "react-real-state-55e9b.firebasestorage.app",
  messagingSenderId: "192947624541",
  appId: "1:192947624541:web:aefabb0f6abf06da45cbb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;