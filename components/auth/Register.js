import React, { Component, useState } from "react";
import { SafeAreaView, TextInput, Button } from "react-native";

import firebase from "firebase";

function RegisterScreen() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onSignUp = () => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((result) => {
				firebase
					.firestore()
					.collection("users")
					.doc(firebase.auth().currentUser.uid)
					.set({
						name,
						email,
					});
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<SafeAreaView>
			<TextInput placeholder="name" onChangeText={(name) => setName(name)} />
			<TextInput
				placeholder="email"
				onChangeText={(email) => setEmail(email)}
			/>
			<TextInput
				placeholder="password"
				secureTextEntry={true}
				onChangeText={(password) => setPassword(password)}
			/>
			<Button onPress={() => onSignUp()} title={"Sign Up"} />
		</SafeAreaView>
	);
}

/*
export class RegisterScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			name: "",
		};
		this.onSignUp = this.onSignUp.bind(this);
	}

	onSignUp() {
		const { email, password, name } = this.state;
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
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
					placeholder="name"
					onChangeText={(name) => this.setState({ name })}
				/>
				<TextInput
					placeholder="email"
					onChangeText={(email) => this.setState({ email })}
				/>
				<TextInput
					placeholder="password"
					secureTextEntry={true}
					onChangeText={(password) => this.setState({ password })}
				/>
				<Button onPress={() => this.onSignUp()} title={"Sign Up"} />
			</SafeAreaView>
		);
	}
}
*/

export default RegisterScreen;
