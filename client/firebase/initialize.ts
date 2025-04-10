// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNxfZiWu1NPMNHCOm00nXWVmS1ZEb6Z_0",
  authDomain: "damjam-61f6c.firebaseapp.com",
  projectId: "damjam-61f6c",
  storageBucket: "damjam-61f6c.firebasestorage.app",
  messagingSenderId: "377789908455",
  appId: "1:377789908455:web:f69497348fbfd784e72942",
  measurementId: "G-8WK745YTPT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const googleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error: any) {
    console.error(error);
  }
};

async function signUp(email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await sendEmailVerification(userCredential.user);
    alert("Verification email sent! Please check your inbox.");
  } catch (error: any) {
    console.error("Error signing up:", error.message);
  }
}

const emailLogin = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error: any) {
    console.error(error.message);
  }
};

const logout = async () => {
  await signOut(auth);
};

export { auth, googleLogin, signUp, emailLogin, logout };
