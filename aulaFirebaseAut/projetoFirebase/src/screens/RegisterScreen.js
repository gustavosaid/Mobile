// src/screens/RegisterScreen.js
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../services/credenciaisFirebaseAuth';
import useFirebase from '../hooks/useFirebase'; // Seu hook
import globalStyles from '../styles/globalStyles';

export default function RegisterScreen({ navigation }) {
  const [form, setForm] = useState({
    nome: '',
    curso: '',
    faculdade: '',
    projeto: '',
    descricao: '',
    periodo: '',
    email: '',
    senha: '',
  });
  const { addUser } = useFirebase();

  const handleChange = (field, value) =>
    setForm({ ...form, [field]: value });

  const handleSubmit = async () => {
    
    if (form.email.trim() === '' || form.senha.trim() === '') {
        Alert.alert('Erro', 'Por favor, preencha o e-mail e a senha.');
        return;
    }

    try {
      
      let role = 'Estudante'; 
      if (form.email.toLowerCase() === 'admin@gmail.com') {
        role = 'admin'; 
      }

       //Prepara os dados para salvar no Firestore, incluindo a 'role'
      const userData = { ...form, role: role };
      
      // Cadastra os dados no Firestore
      await addUser(userData);
      
      // Cadastra o usuário na Authentication 
      await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.senha
      );

      Alert.alert('Sucesso', `Usuário '${form.nome}' cadastrado como ${role}!`);
      navigation.navigate('Login');
      
    } catch (error) {
      //  mensagem de erro 
      let errorMessage = 'Falha no cadastro.';
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Este e-mail já está em uso.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'A senha deve ter pelo menos 6 caracteres.';
      }
      Alert.alert('Erro', errorMessage);
      console.error("Erro no cadastro:", error);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={globalStyles.scrollContainer} keyboardShouldPersistTaps="handled">

        <View style={globalStyles.inner}>
          <Text style={globalStyles.title}>Cadastro</Text>

        {['nome',
          'curso',
          'faculdade',
          'projeto',
          'descricao',
          'periodo',
          'email', 
          'senha'].map((field) => (
            
          <TextInput
            key={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            style={globalStyles.input}
            secureTextEntry={field === 'senha'}
            value={form[field]}
            onChangeText={(v) => handleChange(field, v)}
            autoCapitalize={field === 'email' || field === 'senha' ? 'none' : 'words'}
          />
        ))}

        <TouchableOpacity style={globalStyles.button} onPress={handleSubmit}>
          <Text style={globalStyles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </KeyboardAvoidingView >
  );
}
