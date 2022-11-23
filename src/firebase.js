// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
//import { getFirestore} from 'firebase/firestore/lite';
//import { getDatabase } from "firebase/database";
//import * as admin from 'firebase-admin';
//import('../serviceAccountKey.json');

 


import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Replace with your app's Firebase project configuration


  
const firebaseConfig = {
  databaseURL: "https://analyseur-air-arcangel.firebaseio.com",
  apiKey: "AIzaSyAv6LIlx8pVVNa2BzDdEwDb9uvHEQ7JeBM",
  authDomain: "analyseur-air-arcangel.firebaseapp.com",
  projectId: "analyseur-air-arcangel",
  storageBucket: "analyseur-air-arcangel.appspot.com",
  messagingSenderId: "859022624884",
  appId: "1:859022624884:web:65dc4308e5a2a24646e921",
  measurementId: "G-C3W5G7800Y"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
// Get a reference to the database service
//const database = getDatabase(app);
export const database= getDatabase(app);

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//export const auth=getAuth(app);
//export const db= getFirestore(app);
//const db = getDatabase(app);
//export default app;
