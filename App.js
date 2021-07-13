import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaG--IlE3hmkBximnJ0PXHiU3kOuOQ34c",
  authDomain: "best-by-93391.firebaseapp.com",
  projectId: "best-by-93391",
  storageBucket: "best-by-93391.appspot.com",
  messagingSenderId: "202997390020",
  appId: "1:202997390020:web:b712fef64f97d969a4c791",
  measurementId: "G-KEDET25ZB8"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}
import { StyleSheet, Text, TextInput, Button, Alert, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DumbComponent from './components/DumbComponent';
import NewView from './components/NewView';
import styles from './stylesheets/Default';

import LandingScreen from './components/auth/Landing'
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Landing">
        <Stack.Screen name = "Landing" component = {LandingScreen} options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}