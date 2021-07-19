import React, { Component, useState } from "react";
import { View, TextInput, Button } from "react-native";

import firebase from "firebase";

import Default from "../UI-Components/Default";
import { QStext } from "../UI-Components/QStext";

function RegisterScreen({navigation}) {
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
		<View style={Default.ViewContainer}>
			<QStext
				text={"Register"}
				h2
				style={{ marginTop: 50, marginBottom: 20 }}
			/>
			<QStext
				text={"Making your life simpler, one ingredient at a time"}
				p
				style={{ marginBottom: 25 }}
			/>
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
			<Button onPress={() => onSignUp()} title={"Sign Up"} />
			<Button onPress = {() => navigation.navigate("Landing")} title ={"Back"}/>
		</View>
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
