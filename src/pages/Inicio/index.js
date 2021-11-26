import * as React from 'react';
import { Text, View, Button, Image, TouchableOpacity, Linkind, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../styles/styles';

// Importando imagens
import addDevice from '../Inicio/addDevice.png';

import Perfil from '../Perfil';

const myIcon = <Icon name="person-circle-outline" size={30} color="#0086FF" padding={10} margin={10} elevation={5} />;
const myIconAdd = <Icon name="add-circle-outline" size={30} color="#0086FF" padding={10} margin={10} elevation={5} />;

export default function Inicio({ navigation: { navigate }}) {
    const navigation = useNavigation();
    return(
        <View style={styles.containerIndex}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <TouchableOpacity name="Perfil" onPress={() => navigate('Perfil')} >
                    <Text>{myIcon}</Text>
                </TouchableOpacity>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity name="Device" onPress={() => navigate('Device')} >
                        <Text>{myIconAdd}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerIndex2}>
                <Image style={styles.imgDevice} source={addDevice} />
                <Text style={styles.h4}>Adicione dispositivos...</Text>
                <TouchableOpacity style={styles.countContainer} name="Device" onPress={() => navigate('Device')} >
                    <Text style={styles.Button}>Adicionar dispositivo</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}