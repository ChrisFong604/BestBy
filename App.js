import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View } from 'react-native';

import DumbComponent from './components/DumbComponent';

const WeirdComponent = () => (
  <Text>This is the weird Component</Text>
);



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Open up App.js to start working on your app!</Text>
      <Text style={styles.textStyle}>Below there will be a dumb component!</Text> 
      <StatusBar style="auto" />

      <Button
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <WeirdComponent/>

      <Button
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <DumbComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#2B2D2F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#fff'
  },
});
