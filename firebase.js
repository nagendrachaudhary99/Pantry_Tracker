// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from  'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk7qKtUN9-F6UIx47jYiXGoxSlhOzSZvE",
  authDomain: "inventory-management-e06f8.firebaseapp.com",
  projectId: "inventory-management-e06f8",
  storageBucket: "inventory-management-e06f8.appspot.com",
  messagingSenderId: "284841655173",
  appId: "1:284841655173:web:2a3e514939c45eea2ce2ec",
  measurementId: "G-QCW9R5E8BK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore=getFirestore(app)

export {firestore}
