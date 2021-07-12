import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, View } from 'react-native';
import DumbComponent from './components/DumbComponent';
import NewView from './components/NewView';
import styles from './stylesheets/Default';

export default function App() {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />

      <Button
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <DumbComponent/>
      <Text> HELLO! </Text>

      <NewView/>
    </View>
  );
}