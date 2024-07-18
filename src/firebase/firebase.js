// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9UDmASZU12PSB7v30exnlJqDAM7AFha0",
  authDomain: "pis-erp.firebaseapp.com",
  projectId: "pis-erp",
  storageBucket: "pis-erp.appspot.com",
  messagingSenderId: "295477217521",
  appId: "1:295477217521:web:af8f5ec6a5cd319a130150",
  measurementId: "G-HKN3R9M1MQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const firestore = firestore(app);

export{ analytics, auth, firestore}