// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNRaKGM-6T3VdU3lkKJFxyDMWmVDWzM_U",
  authDomain: "leo-africa-institute.firebaseapp.com",
  projectId: "leo-africa-institute",
  storageBucket: "leo-africa-institute.firebasestorage.app",
  messagingSenderId: "962978822352",
  appId: "1:962978822352:web:0c19b73dcb720ffc3c86d5",
  measurementId: "G-D6M589RRNP",
};

let firebaseApp;
let firestoreDb;

try {
  // Initialize Firebase
  firebaseApp = initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
  
  // Initialize Firestore
  firestoreDb = getFirestore(firebaseApp);
  console.log('Firestore initialized successfully');
} catch (error) {
  console.error('Firebase initialization error:', error);
  throw new Error('Failed to initialize Firebase');
}

// Export both app and db instances
export { firebaseApp, firestoreDb as default };
