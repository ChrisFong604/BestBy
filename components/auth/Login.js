import React, { Component, useState } from "react";
import { View, TextInput, Button } from "react-native";

import firebase from "firebase";

import Default from "../UI-Components/Default";
import { QStext } from "../UI-Components/QStext";

function LoginScreen({navigation}) {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSignIn = () => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<View style={Default.ViewContainer}>
			<QStext text={"Sign in"} h2 style={{ marginTop: 50, marginBottom: 25 }} />
			<TextInput
				style={Default.Input}
				placeholder="Email"
				onChangeText={(email) => setEmail(email)}
			></TextInput>
			<TextInput
				style={Default.Input}
				placeholder="Password"
				onChangeText={(password) => setPassword(password)}
			></TextInput>
			<Button onPress={() => onSignIn()} title={"Sign in"} />
			<Button onPress = {() => navigation.navigate("Landing")} title ={"Back"}/>
		</View>
	);

}
/*
export class LoginScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
		};
		this.onSignUp = this.onSignUp.bind(this);
	}

	onSignUp() {
		const { email, password } = this.state;
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		return (
			<SafeAreaView>
				<TextInput
					placeholder="email"
					onChangeText={(email) => this.setState({ email })}
				/>
				<TextInput
					placeholder="password"
					secureTextEntry={true}
					onChangeText={(password) => this.setState({ password })}
				/>
				<Button onPress={() => this.onSignIn()} title={"Sign in"} />
			</SafeAreaView>
		);
	}
}
*/
export default LoginScreen;
