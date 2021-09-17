import React from "react";
import {
	Button,
	Text,
	SafeAreaView,
	View,
	Image,
	TextInput,
} from "react-native";
import firebase from "firebase";

export default function LandingScreen({ navigation }) {
	const onAnonSignIn = () => {
		firebase
			.auth()
			.signInAnonymously()
			.then((result) => console.log(result))
			.catch((error) => console.log(error));
	};
	return (
		<View>
			<Text>Landing</Text>
		</View>
	);
}
