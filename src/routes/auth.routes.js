import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando pages
import Home from '../pages/Home';
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Dashboard from '../pages/Dashboard';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (
        <AuthStack.Navigator initialRouteName='Home'>
            <AuthStack.Screen name="Home" component={Home} options={{ title: '', headerShown: false }} />
            <AuthStack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
            <AuthStack.Screen 
            name="Cadastro"
            component={Cadastro}
            options={{
                title: 'Cadastro',
                headerStyle:{
                    borderBottomWidth: 5,
                    borderBottomColor: '#0086FF'
                },
                headerTintColor: '#2C2C2C',
                headerBackTitleVisible: false,
                headerTitle: 'Voltar'
            }}  />
            <AuthStack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard' }} />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;