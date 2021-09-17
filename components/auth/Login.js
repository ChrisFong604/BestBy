import React, { Component, useState } from "react";
import { View, TextInput, Button } from "react-native";

import firebase from "firebase";

function LoginScreen({ navigation }) {
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
		<View>
			<Text>Login</Text>
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
