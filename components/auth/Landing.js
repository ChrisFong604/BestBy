import React from 'react'
import { Button, Text, SafeAreaView, View } from 'react-native'

import Default from '../../stylesheets/DefaultStyles'
import { QStext } from '../UI-Components/QStext'
export default function LandingScreen({ navigation }) {

    return (
        <SafeAreaView style={ Default.ViewContainer }>
            <QStext text={'BestBy'} h1 bold/>
            <QStext text={'An AIO food management solution'} h3 style={ Default.HeaderText }/>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
            <Button
                title="Register"
                onPress={() => navigation.navigate("Register")}
            />
            
            <View style={{ justifyContent: 'space-between' }}>
                <QStext text={'Created by David, Setu, Kevin, and Chris for'} p italic/>
                <QStext text={'SFU Surge'} p bold italic/>
            </View>

        </SafeAreaView>
    )
}