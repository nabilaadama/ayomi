// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAuth, Auth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkS-aFf1s6_WTL-3DG-WFudKSfw79U9Ts",
  authDomain: "ayomi-87588.firebaseapp.com",
  projectId: "ayomi-87588",
  storageBucket: "ayomi-87588.firebasestorage.app",
  messagingSenderId: "872566070356",
  appId: "1:872566070356:web:55b580342ab58efa0da1c1",
  measurementId: "G-HYG90PPWTZ"
};

// Inisilisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi analytics
let analytics: Analytics | undefined;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Inisialisasi firestore
const firestore: Firestore = getFirestore(app);

// Inisialisasi authentication
const auth: Auth = getAuth(app);

export { app, analytics, firestore, auth };