import { useState } from 'react';
// Importe 'setDoc' para criar documentos com ID específico
import { collection, addDoc, getDocs, doc, deleteDoc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
import { db } from '../services/credenciaisFirebase';

const useFirebase = () => {
  const [loading, setLoading] = useState(false);

  // Esta função agora deve ser usada para outros fins, não para registro de usuário.
  const addUser = async (data) => {
    setLoading(true);
    try {
      await addDoc(collection(db, 'pessoa'), data);
    } finally {
      setLoading(false);
    }
  };
  
  // --- NOVA FUNÇÃO PARA REGISTRO DE USUÁRIO ---
  // Salva o documento do usuário usando o UID da autenticação como ID do documento.
  const createUserDocument = async (uid, data) => {
    setLoading(true);
    try {
        // Usamos setDoc para garantir que o ID do documento seja o UID
        await setDoc(doc(db, 'pessoa', uid), data);
    } finally {
        setLoading(false);
    }
  };

  const fetchUsers = async () => {
    const snapshot = await getDocs(collection(db, 'pessoa'));
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const deleteUser = async (id) => {
    await deleteDoc(doc(db, 'pessoa', id));
  };

  const getUserById = async (id) => {
    const docRef = doc(db, 'pessoa', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("Documento não encontrado para o ID:", id);
      return null;
    }
  };
  
  const updateUser = async (id, data) => {
    setLoading(true);
    try {
      const userDoc = doc(db, 'pessoa', id);
      await updateDoc(userDoc, data);
    } finally {
      setLoading(false);
    }
  };

  // Retorne a nova função
  return { 
    addUser, 
    fetchUsers, 
    deleteUser, 
    getUserById, 
    updateUser, 
    createUserDocument, 
    loading 
  };
};

export default useFirebase;
