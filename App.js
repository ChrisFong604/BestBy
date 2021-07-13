import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text } from "react-native";

import firebase from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyCeiTn_h_M0Qn142qjJt32-6tGSQixTgWw",
	authDomain: "bestby-2a9ad.firebaseapp.com",
	projectId: "bestby-2a9ad",
	storageBucket: "bestby-2a9ad.appspot.com",
	messagingSenderId: "201942630744",
	appId: "1:201942630744:web:240677cca611bc2f0be52d",
	measurementId: "G-VHHP35HT8D",
};

if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialrouteName="Landing">
				<Stack.Screen
					name="Landing"
					component={LandingScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="Register" component={RegisterScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
