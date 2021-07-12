import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View } from 'react-native';
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

  let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold 
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <LinearGradient
          colors={['rgba(0,0,0,0.2)', 'transparent']}
        >
        <View style={ Default.ViewContainer }>
            

            <Text style={ Default.HeaderText }>BestBy</Text>
            <Text style={ Default.BodyText }>An all-in-one food management system</Text>
          <Button
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </LinearGradient>
    );
  }
}