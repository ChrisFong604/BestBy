import React, { useState, useEffect } from "react";

import { Provider } from "./context/UserContext";

import firebase, { db, auth } from "./firebase";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as eva from "@eva-design/eva";
import {
	ApplicationProvider,
	Layout,
	Text,
	Input,
} from "@ui-kitten/components";
import { default as theme } from "./theme.json";

import { View, Button } from "react-native";

import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";
import LoginScreen from "./components/auth/Login";

const Stack = createNativeStackNavigator();

export default function App() {
	const [loaded, setLoaded] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);

	return (
		<ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
			<Layout
				style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
			>
				<Text category="h1">HOME</Text>
			</Layout>
		</ApplicationProvider>
	);

	/*
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
			<ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
				<Text>Loading</Text>
			</ApplicationProvider>
		);
	}
	if (!loggedIn) {
		return (
			<ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
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
			</ApplicationProvider>
		);
	}

	return (
		//When User is logged in
		<ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
			<Provider>
				<Text>Logged in</Text>
			</Provider>
		</ApplicationProvider>
	);
  */
}
