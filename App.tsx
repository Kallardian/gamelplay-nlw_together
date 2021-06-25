import React from "react";
import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import AppLoading from 'expo-app-loading'
import { StatusBar } from "react-native";

import { Routes } from "./src/routes";
import { Brackground } from "./src/components/Background";


export default function App() {


  const [fontsLoeaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  if (!fontsLoeaded) {
    return <AppLoading />
  }

  return (
    <Brackground>
      <StatusBar
        barStyle="light-content" //pra ficar claro a barra de status
        backgroundColor="transparent" //para deixar ela transparente
        translucent //para deixar o conteúdo bater até o topo da tela
      />

      <Routes />
    </Brackground>
  );
}