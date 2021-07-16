import React, { Component, useEffect, useState } from "react";
import { View, TextInput, Button } from "react-native";
import Default from "../UI-Components/Default";

import { fetchUser } from "../../redux/actions";
import firebase from "firebase";

import { QStext } from "../UI-Components/QStext";

function AccountScreen({ currentUser, navigation }) {
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

	return (
		<View style={Default.ViewContainer}>
			<QStext text={"Currently signed in as"} h2 />
			<QStext text={currentUser.name} h1 />
			<Button onPress={() => onSignOut()} title={"Sign Out"} />
		</View>
	);
}

export default AccountScreen;
