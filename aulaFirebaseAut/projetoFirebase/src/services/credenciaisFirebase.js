// src/services/credenciaisFirebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD-BlSOC9_QQY39ryo-ShS5aqD0qs4VoBg",
  authDomain: "aps-gustavoribeiro.firebaseapp.com",
  projectId: "aps-gustavoribeiro",
  storageBucket: "aps-gustavoribeiro.firebasestorage.app",
  messagingSenderId: "281994141967",
  appId: "1:281994141967:web:3f1cbeb936e42deeee9e7a"
};


// Inicializa o App
const appFirebase = initializeApp(firebaseConfig);

// **NOVO**: inicializa e exporta o Firestore
export const db = getFirestore(appFirebase);

// Mantém export default do App (útil caso queira)
export default appFirebase;
