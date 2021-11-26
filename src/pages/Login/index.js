import React, { useState, useEffect, useContext } from 'react';
import { Text, View, Button, Image, AsyncStorage, TouchableOpacity, KeyboardAvoidingView, TextInput, Platform, Provider } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { AuthContext } from '../../contexts/auth';
import { CommonActions, StackActions } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Importando folha de estilo
import { styles } from '../../styles/styles';

// Importando imagens
import logo from '../../../assets/icon.png';

import Dashboard from '../Dashboard';


export default function Login({ navigation: { navigate }}) {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [status, setStatus] = useState('');
  const [showMsgLogin, setShowMsgLogin] = useState('');

  function handleLoginButton(){
    if(email != '' && password != '') {
      if(email == 'admin' && password == 'admin') {
        navigation.navigate('Dashboard', { paramName: 'Dashboard' });
      }else{
        alert('Login ou senha inválido!');
      }
    }else{
      alert('Preencha todos os campos!');
    }
  }
  
  
  /*
    const req = fetch('//192.168.0.10:19000', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: { 
        'Content-Type': 'application/json'
      }
    });
    const json = await req.json();

    if(json.status === 'ok') {
      setStatus('Acesso LIBERADO!');
      setShowMsgLogin(true);
    } else {
      setStatus('Acesso NEGADO!');
      setShowMsgLogin(false);
    }
  }
  */
 // const { user } = useContext(AuthContext);

  /*
  function handleLogin() {
    console.log(user.nome);
  }
  */

  return (
    <KeyboardAvoidingView style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>

      <View style={styles.container}>
        <Image style={styles.imgLogo} source={logo} />
        <Text style={styles.h2}>Entrar</Text>
        
        <View>
          <TextInput style={styles.loginInput} 
          placeholder="E-mail " 
          autoCorrect={ false } 
          autoCapitalize="none" 
          value={ email } 
          onChangeText= { (text) => setEmail(text) } />
          
          <TextInput style={styles.loginInput} 
          placeholder="Senha " 
          autoCorrect={ false } 
          autoCapitalize="none" 
          value={ password }
          onChangeText= { (text) => setPassword(text) }
          secureTextEntry={true}  />
        </View>

        <TouchableOpacity style={styles.countContainer} onPress={handleLoginButton}>
          <Text style={styles.Button}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Cadastro')}>
          <Text> </Text>
          <Text style={styles.Button2}>Esqueceu a senha</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

/* 
() => navigate('Dashboard')
<Text style={styles.status}>...</Text>
<Text style={styles.loginMsg}>Usuário ou senha inválidos!</Text> 
*/