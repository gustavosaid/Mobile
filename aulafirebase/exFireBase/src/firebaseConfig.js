// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeFirestore } from 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8WQw5bTeJFhTluCdKlLprNXMwKP_CpIs",
  authDomain: "aulafirebasegustavo-56279.firebaseapp.com",
  projectId: "aulafirebasegustavo-56279",
  storageBucket: "aulafirebasegustavo-56279.firebasestorage.app",
  messagingSenderId: "171741170121",
  appId: "1:171741170121:web:321d16418b55c8abef4018",
  measurementId: "G-CZLPH7FFHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = initializeFirestore(app,{
    experimentalForceLongPolling: true,
    useFetechStrems: false,

});

export { db };
