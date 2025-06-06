// src/screens/UserListScreen.js
import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  Alert, 
  ActivityIndicator 
} from 'react-native';
import auth from '../services/credenciaisFirebaseAuth';
import { onAuthStateChanged } from 'firebase/auth';
import useFirebase from '../hooks/useFirebase';
import globalStyles from '../styles/globalStyles';

export default function UserListScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const { fetchUsers, deleteUser, getUserById } = useFirebase();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userData = await getUserById(currentUser.uid);
        setUserRole(userData?.role || 'student'); // Define a role ou 'student' como padrão

        const allUsers = await fetchUsers();
        setUsers(allUsers);
      } else {
        setUserRole(null);
        setUsers([]);
      }
      setLoading(false);
    });

    return () => unsubscribe(); 
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers((u) => u.filter((x) => x.id !== id));
      Alert.alert('Sucesso', 'Usuário excluído');
    } catch {
      Alert.alert('Erro', 'Não foi possível excluir');
    }
  };

  const renderItem = ({ item }) => (
    <View style={globalStyles.listItem}>
      <Text>{item.nome}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('UserDetails', { id: item.id })}>
          <Text style={globalStyles.link}>Ver</Text>
        </TouchableOpacity>

        {/* Botão de excluir só aparece para o admin */}
        {userRole === 'admin' && (
          <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => handleDelete(item.id)}>
            <Text style={[globalStyles.link, { color: 'red' }]}>Excluir</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
  
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Lista de Usuários</Text>
      <Text style={{ textAlign: 'center', marginBottom: 10, fontWeight: 'bold' }}>
        Logado como: {userRole ? userRole.toUpperCase() : '...'}
      </Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={{textAlign: 'center', marginTop: 20}}>Nenhum usuário encontrado.</Text>}
      />
    </View>
  );
}
