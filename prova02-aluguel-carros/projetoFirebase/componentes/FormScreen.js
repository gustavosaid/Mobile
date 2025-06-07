
import React, { useState } from 'react';
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Alert
} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import auth from '../services/credenciaisFirebaseAuth';
import useFirebase from '../hooks/useFirebase';
import globalStyles from '../styles/globalStyles';

export default function FormScreen({ navigation }) {
    const [form, setForm] = useState({
        nome: '',
        cliente: '',
        valor: '',
        data: ''
    });
    const { addUser } = useFirebase();

    const handleChange = (field, value) =>
        setForm({ ...form, [field]: value });

    const handleSubmit = async () => {
        try {
            // 1) cadastra no Firestore
            await addUser(form);
            // 2) cadastra no Auth
            await createUserWithEmailAndPassword(
                auth,
                form.email,
                form.senha
            );
            Alert.alert('Sucesso', 'Usuário cadastrado!');
            navigation.navigate('List');
        } catch (error) {
            Alert.alert('Erro', 'Falha no cadastro');
            console.error(error);
        }
    };

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Cadastro</Text>
            {['nome', 'cliente', 'valor', 'data'].map((field) => (
                <TextInput
                    key={field}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    style={globalStyles.input}
                    secureTextEntry={field === 'senha'}
                    value={form[field]}
                    onChangeText={(v) => handleChange(field, v)}
                />
            ))}
            <TouchableOpacity
                style={globalStyles.button}
                onPress={handleSubmit}
            >
                <Text style={globalStyles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={globalStyles.button}
                onPress={() => navigation.navigate('List')}
            >
                <Text>Lista</Text>
            </TouchableOpacity>

        </View>
    );
}
