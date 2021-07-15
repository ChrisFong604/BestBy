import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

import firebase from "firebase/app";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));
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
import LoginScreen from "./components/auth/Login";
import MainScreen from "./components/Main";

import Default from "./components/UI-Components/Default";
import { QStext } from "./components/UI-Components/QStext";

const Stack = createStackNavigator();

//Using React hooks as opposed to class in the tutorial
export default function App() {
	const [loaded, setLoaded] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);

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
			<View style={Default.ViewContainer}>
				<Text>Loading</Text>
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
					<Stack.Screen name="Register" component={RegisterScreen} />
					<Stack.Screen name="Login" component={LoginScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
	return (
		//When User is logged in
		<Provider store={store}>
			<Stack.Navigator initialrouteName="Maing">
				<Stack.Screen
					name="Main"
					component={MainScreen}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</Provider>
	);
}
