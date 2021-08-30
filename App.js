import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, createContext } from "react";
import { Text, View, Button } from "react-native";

import { db, auth } from "./firebase";

import { Provider } from "./context/UserContext";

import firebase from "./firebase";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";
import LoginScreen from "./components/auth/Login";
import MainScreen from "./components/Main";

import Default from "./components/UI-Components/Default";
import { QStext } from "./components/UI-Components/QStext";

const Stack = createStackNavigator();

//Using React hooks as opposed to class in the tutorial
export default function App() {
	const [loaded, setLoaded] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);
	const [isAnon, setIsAnon] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			if (!user) {
				setLoggedIn(false);
				setLoaded(true);
			} else {
				setLoggedIn(true);
				setLoaded(true);
			}
		});
	});

	if (!loaded) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<QStext text={"Loading"} h2 />
			</View>
		);
	}
	if (!loggedIn) {
		return (
			<NavigationContainer>
				<Stack.Navigator initialrouteName="Landing">
					<Stack.Screen
						name="Landing"
						component={LandingScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Register"
						component={RegisterScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Login"
						component={LoginScreen}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	}

	return (
		//When User is logged in
		<Provider>
			<NavigationContainer>
				<Stack.Navigator initialrouteName="Main">
					<Stack.Screen
						name="Main"
						component={MainScreen}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
