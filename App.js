import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import {firebase, database} from './src/services/firebaseConnection';

//console.disableYellowBox=true;

import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';

function App() {
  return (
    <NavigationContainer>
        <AuthProvider>
          <StatusBar barStyle='light-content' />
          <Routes />
        </AuthProvider>
    </NavigationContainer>
  );
}

export default App;