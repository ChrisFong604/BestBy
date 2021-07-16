import React from "react";
import {
	Button,
	Text,
	SafeAreaView,
	View,
	Image,
	TextInput,
} from "react-native";

import Default from "../UI-Components/Default";
import { QStext } from "../UI-Components/QStext";

export default function LandingScreen({ navigation }) {
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
					style={Default.Btn}
				/>
				<Button
					title="Register"
					onPress={() => navigation.navigate("Register")}
					style={Default.Btn}
				/>
			</View>
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
