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

import Default from "../UI-Components/Default";
import { QStext } from "../UI-Components/QStext";
import CustomBtn from "../UI-Components/CustomBtn";

import MainScreen from "../Main";

export default function LandingScreen({ navigation }) {
	const onAnonSignIn = () => {
		firebase
			.auth()
			.signInAnonymously()
			.then((result) => console.log(result))
			.catch((error) => console.log(error));
	};
	return (
		<SafeAreaView style={Default.ViewContainer}>
			<View style={{ flexDirection: "row", marginTop: 50 }}>
				<Image
					source={require("../../assets/FridgeIcon20.png")}
					style={{ alignSelf: "center" }}
				/>
				<QStext text={"BestBy"} h1 bold />
			</View>
			<QStext
				text={"An AIO food management solution"}
				h4
				style={Default.HeaderText}
			/>
			<View style={{ flexDirection: "row", marginTop: 25 }}>
				<Button
					title="Login"
					onPress={() => navigation.navigate("Login")}
					color="#89909F"
					style={Default.Button}
				/>
				<Button
					title="Register"
					onPress={() => navigation.navigate("Register")}
					color="#89909F"
					style={Default.Button}
				/>
			</View>
			<Button
				title={"Continue without signing in"}
				onPress={onAnonSignIn}
			></Button>
			{/*
				<View style={{ justifyContent: "space-between" }}>
					<QStext
						text={"Created by David, Setu, Kevin, and Chris for"}
						p
						italic
					/>
					<QStext text={"SFU Surge"} p bold italic />
				</View>
            */}
		</SafeAreaView>
	);
}