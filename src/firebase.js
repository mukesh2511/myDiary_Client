import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBysK1CtNpueR0fMR6xe3wlCjb7duDi7cw",
  authDomain: "mydiary-dce1d.firebaseapp.com",
  projectId: "mydiary-dce1d",
  storageBucket: "mydiary-dce1d.appspot.com",
  messagingSenderId: "391226705124",
  appId: "1:391226705124:web:97ca8b8e8a6619fa97d8f1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;
