import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';


import  AppLoading  from 'expo-app-loading'

import { useFonts, Raleway_400Regular, Raleway_700Bold, Raleway_900Black } from '@expo-google-fonts/raleway'

import { Container, Title } from './index.styles'
import Login from './components/Login';
import Logo from './components/Logo';

export default function App() {

  let [fontsLoader] = useFonts({

    Raleway_400Regular,
    Raleway_700Bold, 
    Raleway_900Black
  })

  // if(!fontsLoader){
  //   return <AppLoading />
  // }

  return (
    <Container>
      <Logo />
      
      
      <StatusBar style="auto" />

      <Login />
    </Container>
  );
}

