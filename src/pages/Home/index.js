import React from 'react';
import { Text, View, Button, Image, TouchableOpacity } from 'react-native';

// Importando folha de estilo
import { styles } from '../../styles/styles';

// Importando imagens
import logo from '../../../assets/icon.png'; 

export default function Home({ navigation: { navigate }}) {
  return (
    <View style={styles.container}>
      <Image style={styles.imgLogo } source={logo} />

      <Text style={styles.h3}>Casa Digital</Text>

      <Text> </Text>
      <Text> </Text>

      <TouchableOpacity style={styles.countContainer} onPress={() => navigate('Login')}>
          <Text style={styles.Button}>Fazer Login</Text>
      </TouchableOpacity>

      <Text> </Text>

      <TouchableOpacity style={styles.countContainer2} onPress={() => navigate('Cadastro')}>
        <Text style={styles.Button2}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}

// <Button title=" Fazer Login " onPress={() => navigate('Login')} /><Text> </Text>


/* <View style={styles.container}>
<Image style={styles.imgLogo } source={logo} />
<Text style={styles.h3}>Casa Digital</Text>
<Button title="Fazer Login" onPress={() => navigation.navigate(Login)}
/>
<Text> </Text>
<Text>Criar Conta</Text>
</View> */