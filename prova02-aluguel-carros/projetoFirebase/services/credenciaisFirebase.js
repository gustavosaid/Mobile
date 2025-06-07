// src/services/credenciaisFirebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyClqY1Ukgg0Qa0zK0Oh03adB4CEOyqj8_Q",
  authDomain: "prova01-aluguel-carros-c7595.firebaseapp.com",
  projectId: "prova01-aluguel-carros-c7595",
  storageBucket: "prova01-aluguel-carros-c7595.firebasestorage.app",
  messagingSenderId: "201098923784",
  appId: "1:201098923784:web:7cdceae5d83d8cf2ed26bd"
};


// Inicializa o App
const appFirebase = initializeApp(firebaseConfig);

// **NOVO**: inicializa e exporta o Firestore
export const db = getFirestore(appFirebase);

// Mantém export default do App (útil caso queira)
export default appFirebase;
