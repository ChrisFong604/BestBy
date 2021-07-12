import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { 
  useFonts,
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold 
} from '@expo-google-fonts/quicksand'

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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'Quicksand_700Bold ', fontSize: 40 }}>BestBy</Text>
        <Text style={{ fontSize: 40 }}>Platform Default</Text>
        <StatusBar style="auto" />

        <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <Text style={{ fontFamily: 'Quicksand_400Regular', fontSize: 40 }}>Extra</Text>
      </View>
    );
  }
}