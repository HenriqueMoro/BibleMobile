import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import { Provider } from './src/context/Context';

export default function App() {
  return (
   <NavigationContainer>
     <Provider>
     <Routes></Routes>
     </Provider>
   </NavigationContainer>
  );
}

