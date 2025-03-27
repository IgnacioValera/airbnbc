import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Image, Input, Button } from '@rneui/base';
import { isEmpty } from 'lodash';
import { Icon } from '@rneui/base';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login(props) {
  const { navigation } = props;
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({email: '', password: ''});
  const [ShowPassword, setShowPassword] = useState(true);

  const handleLogin = () => {
    if (isEmpty(email) || isEmpty(password)) {
      setError({
        email: 'El correo electrónico es requerido',
        password: 'La contraseña es requerida',
      });
    } else {
      setError({email: '', password: ''});
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("Iniciando: ", user);
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
};
  return (
    <View style={styles.container}>
      <Image source={{uri:'https://static.vecteezy.com/system/resources/previews/000/440/338/original/vector-web-icon.jpg'}} 
      style={{width: 50, height:50}}/>

      <View style={{ margin: 16 }}>
        <Input placeholder="Correo electrónico" label="Correo electrónico" keyboardType='email-address'
          inputContainerStyle={{width: '100%'}} 
          onChange={({nativeEvent: { text }}) => setEmail(text)}
          errorMessage={error.email}
        />

        <Input placeholder="Contraseña" label="Contraseña"
          inputContainerStyle={{width: '100%'}} 
          secureTextEntry={ShowPassword}
          onChange={({nativeEvent: { text }}) => setPassword(text)}
          errorMessage={error.password}
          rightIcon={
            <Icon
              onPress={() => setShowPassword(!ShowPassword)}
              type='material-community'
              name={ShowPassword ? 'eye-outline' : 'eye-off-outline'}
            />
          }
        />

      <Button title="Iniciar sesión" onPress={handleLogin} />
      <Button type='clear' title='Crear Cuenta' onPress={() => navigation.navigate('CreateAccountStack')}/>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});