import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  OAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  type User,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNxfZiWu1NPMNHCOm00nXWVmS1ZEb6Z_0",
  authDomain: "damjam-61f6c.firebaseapp.com",
  projectId: "damjam-61f6c",
  storageBucket: "damjam-61f6c.firebasestorage.app",
  messagingSenderId: "377789908455",
  appId: "1:377789908455:web:f69497348fbfd784e72942",
  measurementId: "G-8WK745YTPT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider("apple.com");

// Google Sign-In
const googleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error: any) {
    console.error("Google Sign-In Error:", error.message);
    return "Google Sign-In Error: " + error.message;
  }
};

// Apple Sign-In
const appleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, appleProvider);
    return result.user;
  } catch (error: any) {
    console.error("Apple Sign-In Error:", error.message);
    return "Apple Sign-In Error:" + error.message;
  }
};

// Email Sign-Up with Password Strength
const signUp = async (email: string, password: string) => {
  if (password.length < 8 || !/\d/.test(password) || !/[A-Z]/.test(password)) {
    return "Password must be at least 8 characters long and include a number and an uppercase letter.";
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await sendEmailVerification(userCredential.user);
    return "Verification email sent! Please check your inbox";
  } catch (error: any) {
    console.error("Sign-Up Error:", error.message);
    return "Sign-Up Error:" + error.message;
  }
};

// Email Sign-In with Verification Check
const emailLogin = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user: User = userCredential.user;

    if (!user.emailVerified) {
      return "Please verify your email before logging in.";
    }
    return user;
  } catch (error: any) {
    console.error("Login Error:", error.message);
    return "Login Error:" + error.message;
  }
};

// Logout
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Logout Error:", error);
  }
};

export { auth, googleLogin, appleLogin, signUp, emailLogin, logout };
