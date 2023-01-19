// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider } from 'firebase/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMrgmN-uHEXH8T2qqozfQhatS5nP8iX9s",
  authDomain: "crwn-clothing-db-ad89b.firebaseapp.com",
  projectId: "crwn-clothing-db-ad89b",
  storageBucket: "crwn-clothing-db-ad89b.appspot.com",
  messagingSenderId: "1082550530240",
  appId: "1:1082550530240:web:4188447becad43c683bd25",
  measurementId: "G-PXFSGNM1PJ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
  });

//--FM-------auth-/-firebaseConfic data initialized------------------------
export const auth = getAuth();

//-----------.....................---------.....F M.......-auth.-provider.-----Called in Sign In Component
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


