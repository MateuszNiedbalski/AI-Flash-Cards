// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARt2q7YIWuBfS1OrT8OLawfaIgmbO2gas",
  authDomain: "flashcards-decde.firebaseapp.com",
  projectId: "flashcards-decde",
  storageBucket: "flashcards-decde.appspot.com",
  messagingSenderId: "901868893737",
  appId: "1:901868893737:web:db7c8b331ff7660fbace38",
  measurementId: "G-GRM9KCC9VR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;