import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../../modules/auth/screens/Login';
import CreateAccount from '../../modules/auth/screens/CreateAccount';

const Stack = createStackNavigator();

export default function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginStsck" component={Login} options={{title: 'Iniciar sesión'}}/>
      <Stack.Screen name="CreateAccountStack" component={CreateAccount} options={{title: 'Crear cuenta'}}/>
    </Stack.Navigator>
  )
}