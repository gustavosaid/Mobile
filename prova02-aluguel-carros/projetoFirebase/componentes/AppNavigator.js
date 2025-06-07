import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../componentes/LoginScreen';
import RegisterScreen from '../componentes/RegisterScreen';
import ListScreen from '../componentes/ListScreen';
import FormScreen from '../componentes/FormScreen';




const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator>

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Form" component={FormScreen} />

    </Stack.Navigator>
);

export default StackNavigator;