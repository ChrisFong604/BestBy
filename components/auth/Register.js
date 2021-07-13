import { bind, bindAll } from "lodash";
import React, { Component } from "react";
import { SafeAreaView, TextInput } from "react-native";
import View from "react-native-gesture-handler/lib/typescript/GestureHandlerRootView";

export class Register extends Component {
	constuctor(props) {
		super(props);

		this.state = {
			name: "",
			email: "",
			password: "",
		};
	}

	onSignUp() {}

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
					placeholder="name"
					secureTextEntry={true}
					onChangeText={(password) => this.setState({ password })}
				/>
				<Button onPress={() => this.onSignUp()} title={"Sign Up"} />
			</SafeAreaView>
		);
	}
}

export default Register;
