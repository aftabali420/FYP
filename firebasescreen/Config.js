// Firebase configuration
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


import{auth,firestore} from './Config';
import{initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBhNGI5z21Hm0DQRVMt-zQlp-u3TBo707o",
  authDomain: "wheelconnect-fyp.firebaseapp.com",
  projectId: "wheelconnect-fyp",
  storageBucket: "wheelconnect-fyp.firebasestorage.app",
  messagingSenderId: "160785219439",
  appId: "1:160785219439:web:626c2d6e8312de0ca5f29a",
  measurementId: "G-VQBM8JLKGH"
}
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  
export {firebase};
export const app=initializeApp(firebaseConfig);


const analytics=getAnalytics(app);