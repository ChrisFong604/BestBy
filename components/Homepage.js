import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, Button, Alert, SafeAreaView, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import DefaultStyles from '../stylesheets/DefaultStyles';

function HomePage() {
  
  return (
    <LinearGradient
        colors={['rgba(0,0,0,0.5)', 'transparent']}
      >
      <SafeAreaView style={ DefaultStyles.ViewContainer }>

          <Text style={ DefaultStyles.HeaderText }>BestBy</Text>
          <Text style={ DefaultStyles.BodyText }>An all-in-one food management system</Text>
          <Image style={{ padding: 50 }} source={require('./FridgeIcon40.png')} />
          <StatusBar style="auto" />
      </SafeAreaView>
    </LinearGradient>
  );
}

export { HomePage };
