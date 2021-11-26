import React, { useState, useEffect, useContext } from 'react';
import { Text, View, Button, Image, TouchableOpacity, KeyboardAvoidingView, TextInput, Platform, Provider, AsyncStorage } from 'react-native';
import { AuthContext } from '../../contexts/auth';

// Importando folha de estilo
import { styles } from '../../styles/styles';

// Importando imagens
import logo from '../../../assets/icon.png'; 

export default function Cadastro({ navigation: { navigate }}){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function cadastrar(){
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( (value) => {
      alert('Usuario criado: ' + value.user.email);
    })
    .catch( (error) => {
      if(error.code === 'auth/weak-password'){
        alert('Sua senha deve ter pelo menos 6 caracteres');
      }
      if(error.code === 'auth/invalid-email'){
        alert('E-mail inválido');
      }else{
        alert('Ops algo deu errado!');
      }
    })
  }

  /*
  const { Cadastro } = useContext(AuthContext);


  function handCadastro(){
    Cadastro(email, password, nome);
  }
  */
  function handleCadastroButton(){
    if(nome != '' && email != '' && password != '') {
      if(email == 'admin' && password == 'admin') {
        navigation.navigate('Dashboard', { paramName: 'Dashboard' });
      }else{
        alert('Login ou senha inválido!');
      }
    }else{
      alert('Preencha todos os campos!');
    }
  }
  return (
    <KeyboardAvoidingView style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>

      <View style={styles.container}>
        <Image style={styles.imgLogo} source={logo} />
        <Text style={styles.h2}>Cadastro</Text>
        
        <View>
        <TextInput style={styles.loginInput} 
          placeholder="Nome " 
          autoCorrect={ false } 
          autoCapitalize="none" 
          value={ nome } 
          onChangeText= { (text) => setNome(text) } />

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
          secureTextEntry={true}
          onChangeText= { (text) => setPassword(text) }  />
        </View>
        <TouchableOpacity style={styles.countContainer} onPress={handleCadastroButton}>
          <Text style={styles.Button}>Cadastrar</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

//  onPress={handCadastro}