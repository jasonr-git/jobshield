// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCDp2ZjsebPSy08BthKWHlwbsytCvNXHC4",
    authDomain: "supreet-souharda.firebaseapp.com",
    projectId: "supreet-souharda",
    storageBucket: "supreet-souharda.appspot.com",
    messagingSenderId: "533863631788",
    appId: "1:533863631788:web:3d947ebd5d76744d5f4809",
    measurementId: "G-9Q1RK9FMGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
