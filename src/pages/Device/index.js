import * as React from 'react';
import { Text, View, Button, Image, TouchableOpacity, Linkind, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../styles/styles';

// Importando imagens
import Buscar from '../Device/buscar.png';

import Perfil from '../Perfil';

//import ewelink from '../../services/tokenEwelinkApi';

const myIcon = <Icon name="person-circle-outline" size={30} color="#0086FF" padding={10} margin={10} elevation={5} />;
const myIconAdd = <Icon name="navigate-outline" size={30} color="#0086FF" padding={10} margin={10} elevation={5} />;

export default function Device() {
    const Ligar = (url)=>{

    }
    fetch('http://192.168.137.42:8081/zeroconf/switch')
     .then((response) => {
         if (!response.ok) throw new Error('Erro ao na requisição, status'+ response.status);
         return response.json();
     });

    return(
            <View style={styles.container}>
                <Image style={styles.imgDevice} source={Buscar} />
                <Text style={styles.h4}>Buscar dispositivos...</Text>
                <TouchableOpacity style={styles.countContainer} onPress={Ligar()}>
                    <Text style={styles.Button}>Localizar dispositivo </Text>
                </TouchableOpacity>
            </View>
    );
}