// src/screens/UserDetailsScreen.js
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import useFirebase from '../hooks/useFirebase';
import globalStyles from '../styles/globalStyles';

export default function UserDetailsScreen({ route }) {
  const { id } = route.params;
  const [user, setUser] = useState(null);
  const { getUserById } = useFirebase();

  useEffect(() => {
    (async () => {
      const data = await getUserById(id);
      setUser(data);
    })();
  }, [id]);

  if (!user) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
  <Text style={globalStyles.title}>Detalhes</Text>

  <Text style={globalStyles.detailLabel}>Nome</Text>
  <Text style={globalStyles.detailValue}>{user.nome}</Text>

  <Text style={globalStyles.detailLabel}>E-mail</Text>
  <Text style={globalStyles.detailValue}>{user.email}</Text>

  <Text style={globalStyles.detailLabel}>Curso</Text>
  <Text style={globalStyles.detailValue}>{user.curso}</Text>

  <Text style={globalStyles.detailLabel}>Faculdade</Text>
  <Text style={globalStyles.detailValue}>{user.faculdade}</Text>
  
  <Text style={globalStyles.detailLabel}>Período</Text>
  <Text style={globalStyles.detailValue}>{user.periodo}º</Text>

  <Text style={globalStyles.detailLabel}>Projeto</Text>
  <Text style={globalStyles.detailValue}>{user.projeto}</Text>

  <Text style={globalStyles.detailLabel}>Descrição do Projeto</Text>
  <Text style={globalStyles.detailValue}>{user.descricao}</Text>


  {/* Não exiba senha em produção! */}
</View>
  );
}
