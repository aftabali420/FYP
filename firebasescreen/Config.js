// import { initializeApp, getApps } from 'firebase/app';
// import {
//   getAuth,
//   initializeAuth,
//   getReactNativePersistence,
//   onAuthStateChanged,
// } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// // import  AsyncStorage  from '@react-native-async-storage/async-storage';
// import { getStorage } from 'firebase/storage';

// Firebase configuration
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import "firebase/auth";

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
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  
export {firebase};
export const app=initializeApp(firebaseConfig);


const analytics=getAnalytics(app);


// // Initialize Firebase
// let app;
// if (!getApps().length) {
//   app = initializeApp(firebaseConfig);
// } else {
//   app = getApps()[0]; // Use the already initialized app
// }

// const firestore = getFirestore(app);

// // Initialize Firebase Auth

// const auth= getAuth(app);

// // const auth = initializeAuth(app, {
// //   persistence: getReactNativePersistence(AsyncStorage),
// // });

// const storage = getStorage(app);

// export {  auth,firestore, storage };