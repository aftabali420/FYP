// Firebase configuration
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


import{auth,firestore} from './Config';
import{initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyA1jBDvfMX6X3r8r6bQeUueSaZXw_LDXo0",
    authDomain: "pakwheel-999a7.firebaseapp.com",
    projectId: "pakwheel-999a7",
    storageBucket: "pakwheel-999a7.appspot.com",
    messagingSenderId: "79345129921",
    appId: "1:79345129921:web:e29df53138e10a386e7740",
    measurementId: "G-HYCPZ96Y7F"
}
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  
export {firebase};
export const app=initializeApp(firebaseConfig);


const analytics=getAnalytics(app);