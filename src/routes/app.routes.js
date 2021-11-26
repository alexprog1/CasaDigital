import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-vector-icons/Ionicons';

// Importando pages
import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Dashboard from '../pages/Dashboard';
import Device from '../pages/Device';

const AppStack = createNativeStackNavigator();

/*
import Automacao from '../pages/Automacao';
import Perfil from '../pages/Perfil';

const icons = {
    Dashboard: {
        name: 'home-outline'
    },
    Automacao: {
        name: 'flash-outline'
    },
    Perfil: {   
        name: 'person-outline'
    }
};

const Tab = createBottomTabNavigator();

function MyTabs() {
    
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Dashboard} />
            <Tab.Screen name="Automacao" component={Automacao} />
            <Tab.Screen name="Perfil" component={Perfil} />
        </Tab.Navigator>
    );
}

        screenOptions={({route}) => ({
            tabBarIcon: ({ color, size }) => {
                const { name } = icons[route.name];
                return <Icon name={name} color={color} size={size} />
            }
        })}
        tabBarOptions={{ 
            style: {
                backgroundColor: '#000000'
            },
            activeTintColor: '#000000',
        }}
*/

function AppRoutes() {
    return (
        <AppStack.Navigator initialRouteName='Home' screenOptions={{headerTitleAlign: "center"}} >
            <AppStack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}} />
            <AppStack.Screen name="Home" component={Home} options={{ title: '', headerShown: false }} />
            <AppStack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
            <AppStack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro' }} />
            <AppStack.Screen name="Device" component={Device} options={{ title: 'Device' }} />
        </AppStack.Navigator>
    );
}

export default AppRoutes;