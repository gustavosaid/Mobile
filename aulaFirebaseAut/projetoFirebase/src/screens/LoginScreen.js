// src/screens/LoginScreen.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import auth from '../services/credenciaisFirebaseAuth';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import useFirebase from '../hooks/useFirebase';
import globalStyles from '../styles/globalStyles';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [initializing, setInitializing] = useState(true); // Estado para controlar a inicialização
  const { createUserDocument } = useFirebase(); // Função do seu hook

  useEffect(() => {
    const setupAdminAccount = async () => {
      const adminEmail = 'admin@gmail.com';
      const adminPassword = '123456';

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);
        const { uid } = userCredential.user;

        const adminData = {
          nome: 'Administrador',
          email: adminEmail,
          role: 'admin',
          curso: 'N/A',
          faculdade: 'N/A',
          projeto: 'Administração do Sistema',
          descricao: 'Usuário com permissões de administrador.',
          periodo: 'N/A',
        };
        await createUserDocument(uid, adminData);
        console.log('CONTA DE ADMINISTRADOR CRIADA COM SUCESSO. Faça o login.');

      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          console.log('Conta de administrador já existe. Pronto para login.');
        } else {
          console.error('Erro ao configurar conta de administrador:', error);
        }
      } finally {
        setInitializing(false);
      }
    };

    setupAdminAccount();
  }, []); 

  const handleLogin = async () => {
    if (email.trim() === '' || senha.trim() === '') {
        Alert.alert('Erro', 'Por favor, preencha e-mail e senha.');
        return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      Alert.alert('Sucesso', 'Logado com sucesso!');
      navigation.navigate('UserList');
    } catch (error) {
      Alert.alert('Erro', 'Falha no login. Verifique suas credenciais.');
      console.error(error);
    }
  };

  // Mostra uma tela de "carregando" enquanto a verificação do admin acontece
  if (initializing) {
    return (
      <View style={[globalStyles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator size="large" />
        <Text style={{ textAlign: 'center', marginTop: 10 }}>Inicializando sistema...</Text>
      </View>
    );
  }

  // Após a verificação, mostra a tela de login normal
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Login</Text>
      <TextInput
        placeholder="Email"
        style={globalStyles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Senha"
        style={globalStyles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
        <Text style={globalStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}