// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyJkzsqmZi0VtBE-hS9urV1dBVsX9-KJc",
  authDomain: "listfixer-60e65.firebaseapp.com",
  projectId: "listfixer-60e65",
  storageBucket: "listfixer-60e65.appspot.com",
  messagingSenderId: "888956153211",
  appId: "1:888956153211:web:0085c8e7f858b6d17c21de",
  measurementId: "G-C4ZB6NL3D4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      return true; // Login successful
    } catch (error) {
      if (error.code === "auth/cancelled-popup-request" || error.code === "auth/popup-closed-by-user") {
        console.log("User canceled the login popup");
        return false; // Login was canceled
      }
      console.error("Error during Google Sign-In:", error);
      throw error;
    }
  };
  
  export { auth };