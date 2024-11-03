// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDxPQSY48FieyKf_P1GcyktY9H8mst0tFg",
  authDomain: "notes-app-2a09c.firebaseapp.com",
  projectId: "notes-app-2a09c",
  storageBucket: "notes-app-2a09c.firebasestorage.app",
  messagingSenderId: "994108803671",
  appId: "1:994108803671:web:8ddc25158a83d92f34b112"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;