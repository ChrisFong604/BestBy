import React from 'react';
import { StyleSheet } from 'react-native';
import { 
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold 
  } from '@expo-google-fonts/quicksand'

export default StyleSheet.create ({
    ViewContainer: {
        flex: 1, 
        alignItems: 'center', 
        paddingTop: 50
    },
    Card: {
    },
    BodyText: {
        fontFamily: 'Quicksand_400Regular'
    },
    HeaderText: {
        fontFamily: 'Quicksand_700Bold',
        fontSize: 40
    }
})