import React, { Component, useContext, useEffect, useState } from "react";
import { View, TextInput, Button } from "react-native";
import Default from "../UI-Components/Default";

import firebase from "firebase";

import { QStext } from "../UI-Components/QStext";

function AccountScreen({ useremail, isAnon }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	var credential = firebase.auth.EmailAuthProvider.credential(email, password);

	function anonymousLink(credential) {
		// [START auth_anonymous_link]
		firebase
			.auth()
			.currentUser.linkWithCredential(credential)
			.then((usercred) => {
				var user = usercred.user;
				firebase
					.firestore()
					.collection("users")
					.doc(firebase.auth().currentUser.uid)
					.set({
						name,
						email,
						password,
					});
			})
			.catch((error) => {
				console.log("Error upgrading anonymous account", error);
			});
		// [END auth_anonymous_link]
	}

	const onSignOut = () => {
		if (isAnon == true) {
			firebase
				.auth()
				.signOut()
				.catch((error) => {
					console.log(error);
				});
		} else {
			firebase
				.auth()
				.signOut()
				.catch((error) => {
					console.log(error);
				});
		}
	};

	if (isAnon) {
		return (
			<View style={Default.ViewContainer}>
				<QStext text={"Currently signed in anonymously"} h3 />
				<View style={Default.ViewContainer}>
					<QStext text={"Register your account!"} h4 />
					<TextInput
						style={Default.Input}
						placeholder="name"
						onChangeText={(name) => setName(name)}
					></TextInput>
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
	} else {
		return (
			<View style={Default.ViewContainer}>
				<View style={{ flexDirection: "row" }}>
					<QStext text={"Signed in as "} p />
					<QStext text={useremail} h3 />
				</View>
				<Button onPress={() => onSignOut()} title={"Sign Out"} />
			</View>
		);
	}
	/*
	return (
		//Fully authenticated user
		<View style={Default.ViewContainer}>
			<QStext text={"Currently signed in as"} h2 />
			<QStext text={currentUser.name} h1 />
			<Button onPress={() => onSignOut()} title={"Sign Out"} />
		</View>
	);
	*/
}

export default AccountScreen;
