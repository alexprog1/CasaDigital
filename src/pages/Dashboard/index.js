import * as React from 'react';
import { Text, View, Button, Image, TouchableOpacity, Linkind } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


// Importando folha de estilo
import { styles } from '../../styles/styles';
import Automacao from '../Automacao';
import Perfil from '../Perfil';
import Inicio from '../Inicio';

const Tab = createBottomTabNavigator();

const icons = {
  Inicio: {
      name: 'home-outline'
  },
  Automacao: {
      name: 'flash-outline'
  },
  Perfil: {   
      name: 'person-outline'
  }
};

export default () => (
      <Tab.Navigator 
        screenOptions={({route}) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />
          },
          headerTitleAlign: "center"
          }
        )}
      >
        <Tab.Screen name="Inicio" component={Inicio} options={{headerShown: false}} />
        <Tab.Screen name="Automacao" component={Automacao} />
        <Tab.Screen name="Perfil" component={Perfil} alignItems="center" />
      </Tab.Navigator>
);
/*
function MyTabs(){
}

<Tab.Navigator>
  <Tab.Screen name="Dashboard" component={Dashboard} />
  <Tab.Screen name="Automacao" component={Automacao} />
  <Tab.Screen name="Perfil" component={Perfil} />
</Tab.Navigator>


screenOptions={ ({route}) => ({
  tabBarIcon: ({ color, size }) => {
    const {name} = icons[route.name];
    return <Icon name={name} color={color} size={size} />
  }})}
*/
/*  
  const nome = "Admin";
  //const env: () => React$Node = () => {
  const handLigacao = async () => {
    await Linking.openURL("tel:+558499381887");
  };
  const handSMS = async () => {
    await Linking.openURL("sms:+558499381887?body=TESTE DE SMS RAPIDO");
  };
  const handEmail = async () => {
    await Linking.openURL("malito:alexrn17@gmail.com?subject=TESTE DE EMAIL&body=Alex Carvalho");
  };
  const handWhatsapp = async () => {
    await Linking.openURL("https://wa.me/+558499381887?text=Whatsapp Predefinido");
  };

  return (
    <View style={styles.container}>
      <Text>Bem vindo {nome}!</Text>
      <Button title="TESTE ENVIO LiGAÇÃO" onPress={handLigacao} /><Text> </Text>
      <Button title="TESTE ENVIO SMS" onPress={handSMS} /><Text> </Text>
      <Button title="TESTE ENVIO EMAIL" onPress={handEmail} /><Text> </Text>
      <Button title="TESTE ENVIO WHATSAPP" onPress={handWhatsapp} /><Text> </Text>
    </View>
  );
}
*/