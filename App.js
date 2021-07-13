import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold 
} from '@expo-google-fonts/quicksand'

import Default from './stylesheets/DefaultStyles'

export default function App() {

  let x = 1;
  
  return (
    <LinearGradient
        colors={['rgba(0,0,0,0.5)', 'transparent']}
      >
      <View style={ Default.ViewContainer }>

          <Text style={ Default.HeaderText }>BestBy</Text>
          <Text style={ Default.BodyText }>An all-in-one food management system</Text>
          <Image style={{ padding: 50 }} source={require('./FridgeIcon.png')} />
      </View>
    </LinearGradient>
  );
}
