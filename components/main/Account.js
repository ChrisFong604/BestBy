import React, { Component, useContext, useEffect, useState } from "react";
import { View, TextInput, Button } from "react-native";
import Default from "../UI-Components/Default";

import { fetchUser } from "../../redux/actions";
import firebase from "firebase";

import { QStext } from "../UI-Components/QStext";
import { UserContext } from "../../context/temp";

function AccountScreen({ currentUser, navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { userVal, setUserVal } = useContext(UserContext);

	var credential = firebase.auth.EmailAuthProvider.credential(email, password);

	function anonymousLink(credential) {
		// [START auth_anonymous_link]
		firebase
			.auth()
			.currentUser.linkWithCredential(credential)
			.then((usercred) => {
				var user = usercred.user;
				console.log("Anonymous account successfully upgraded", user);
			})
			.catch((error) => {
				console.log("Error upgrading anonymous account", error);
			});
		// [END auth_anonymous_link]
	}
	const onSignOut = () => {
		firebase
			.auth()
			.signOut()
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
		//navigation.navigate("Home");
	};

	if (currentUser.name == "Anonymous User") {
		return (
			<View style={Default.ViewContainer}>
				<QStext text={userVal} h3 />
				<Button
					onPress={() => setUserVal("Context object here")}
					title={"user val"}
				/>
				<QStext text={"Currently signed in as"} h2 />
				<QStext text={currentUser.name} h1 />
				<View style={Default.ViewContainer}>
					<QStext text={"Register your account!"} h4 />
					<TextInput
						style={Default.Input}
						placeholder="email"
						onChangeText={(email) => setEmail(email)}
					></TextInput>
					<TextInput
						style={Default.Input}
						placeholder="password"
						onChangeText={(password) => setPassword(password)}
					></TextInput>
					<Button
						onPress={() => anonymousLink()}
						title={"Register your account"}
					/>
				</View>
				<Button onPress={() => onSignOut()} title={"Sign Out"} />
			</View>
		);
	}

	return (
		//Fully authenticated user
		<View style={Default.ViewContainer}>
			<QStext text={"Currently signed in as"} h2 />
			<QStext text={currentUser.name} h1 />
			<Button onPress={() => onSignOut()} title={"Sign Out"} />
		</View>
	);
}

export default AccountScreen;
