import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBNRaKGM-6T3VdU3lkKJFxyDMWmVDWzM_U",
  authDomain: "leo-africa-institute.firebaseapp.com",
  projectId: "leo-africa-institute",
  storageBucket: "leo-africa-institute.firebasestorage.app",
  messagingSenderId: "962978822352",
  appId: "1:962978822352:web:0c19b73dcb720ffc3c86d5",
  measurementId: "G-D6M589RRNP"
};

let app;
let db;
let analytics = null;

try {
  // Initialize Firebase only once
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  
  // Initialize Analytics only in browser environment
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
} catch (error) {
  console.error('Firebase initialization error:', error);
}

export { analytics };
export default db;
