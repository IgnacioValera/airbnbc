import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Image, Input, Button } from '@rneui/base';
import {isEmpty} from "lodash";
import { Icon } from '@rneui/base';

export default function CreateAccount(props) {
  const {navigation}= props;

  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [validatePassword, setValidatePassword]= useState('');
  const [error, setError] = useState({email: '', password: '', validatePassword: ''});
  const [showPassword, setShowPassword] = useState(true);
  const [ShowPassword1, setShowPassword1] = useState(true);

  const handleLogin=()=>{
    if (isEmpty(email) || isEmpty(password) || isEmpty(validatePassword)) {
      setError({
        email: isEmpty(email) ? "El correo electrónico es requerido" : "",
        password: isEmpty(password) ? "La contraseña es requerida" : "",
        validatePassword: isEmpty(validatePassword) ? "La confirmación de contraseña es requerida" : ""
      });
    } else if (password !== validatePassword) {
      setError({
        email: "",
        password: "Las contraseñas no coinciden",
        validatePassword: "Las contraseñas no coinciden"
      });
    } else {
      setError({ email: "", password: "", validatePassword: "" });
      console.log("Correo: ", email);
      console.log("Contraseña: ", password);
      
      
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{uri:'https://static.vecteezy.com/system/resources/previews/000/440/338/original/vector-web-icon.jpg'}} 
      style={{width: 50, height:50}}/>

      <View style={{ margin: 16 }}>
        <Input placeholder="Correo electrónico" 
        label="Correo electrónico" 
        keyboardType='email-address'
        inputContainerStyle={{width: '100%'}} 
        onChange={({nativeEvent:{text}}) => setEmail(text)}
        errorMessage={error.email}
        />

        <Input placeholder="Contraseña" 
        label="Contraseña"
        inputContainerStyle={{width: '100%'}} 
        secureTextEntry={showPassword} 
        onChange={({nativeEvent:{text}}) => setPassword(text)}
        errorMessage={error.password}
        rightIcon={
          <Icon
            onPress={()=> setShowPassword(!showPassword)}
            type="material-community"
            name={showPassword ? "eye-outline" : "eye-off-outline"}
          />
        }
        />

        <Input placeholder="Confirmar contraseña" 
        label="Confirmar contraseña"
        inputContainerStyle={{width: '100%'}} 
        secureTextEntry={ShowPassword1} 
        onChange={({nativeEvent:{text}}) => setValidatePassword(text)}
        errorMessage={error.validatePassword}
        rightIcon={
          <Icon
            onPress={()=> setShowPassword1(!ShowPassword1)}
            type="material-community"
            name={ShowPassword1 ? "eye-outline" : "eye-off-outline"}
          />
        }
        />
        <Button 
        title={"Crear cuenta"}
        onPress={handleLogin}
        />

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