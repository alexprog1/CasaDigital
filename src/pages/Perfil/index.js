import * as React from 'react';
import { Text, View, StyleSheet , Button, Image, TouchableOpacity, Linkind } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from '../../styles/styles';
import avatar from '../../../assets/avatar.png'; 

const myIcon = <Icon name="person-circle-outline" size={70} color="#000000" />;

export default function Perfil() {
    const user = "Admin";
    const email = "admin@gmail.com";
    return(
        <View style={styles.container}>
            <View style={styles.containerPerfil}>
                <Image style={styles.imgPerfil } source={avatar} />
                    <View style={styles.containerCaixaPerfil}>
                        <Text> </Text>
                        <Text> </Text>
                        <Text style={styles.h5}>{user}</Text>
                        <Text>{email}</Text>
                    </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity>
                        <Text> </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text>Tela de Perfil</Text>
            <Text> </Text>
        </View>
    );
}