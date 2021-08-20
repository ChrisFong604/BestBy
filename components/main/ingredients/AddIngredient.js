import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Button } from "react-native";
import firebase from "firebase";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Default from "../../UI-Components/Default";
import { QStext } from "../../UI-Components/QStext";

function AddIngredient({ navigation }) {
	const [name, setName] = useState("");
	const [expiratonDate, setExpirationDate] = useState("");
	const [foodGroup, setFoodGroup] = useState("");

	const cameraLaunch = () => {
		let options = {
			storageOptions: {
				skipBackup: true,
				path: "images",
			},
		};
		ImagePicker.launchCamera(options, (res) => {
			console.log("Response = ", res);

			if (res.didCancel) {
				console.log("User cancelled image picker");
			} else if (res.error) {
				console.log("ImagePicker Error: ", res.error);
			} else if (res.customButton) {
				console.log("User tapped custom button: ", res.customButton);
				alert(res.customButton);
			} else {
				const source = { uri: res.uri };
				console.log("response", JSON.stringify(res));
				this.setState({
					filePath: res,
					fileData: res.data,
					fileUri: res.uri,
				});
			}
		});
	};

	const submitIngredientHandler = () => {
		firebase
			.firestore()
			.collection("ingredients")
			.doc()
			.set({
				name: name,
				"expiry-date": expiratonDate,
				"food-group": foodGroup,
			})
			.then((res) => {
				console.log("Added to collection " + res);
				navigation.navigate("IngredientsList");
			});
	};

	return (
		<View style={Default.ViewContainer}>
			<QStext text={"Add Ingredient"} h3 />

			<View style={{ flexDirection: "row" }}>
				<MaterialCommunityIcons
					name="food-apple"
					size={25}
					style={{ alignSelf: "center" }}
				/>
				<TextInput
					style={Default.Input}
					placeholder="name"
					onChangeText={(name) => setName(name)}
				></TextInput>
			</View>
			<View style={{ flexDirection: "row" }}>
				<MaterialCommunityIcons
					name="calendar"
					size={25}
					style={{ alignSelf: "center" }}
				/>
				<TextInput
					style={Default.Input}
					placeholder="expiration date"
					onChangeText={(date) => setExpirationDate(date)}
				></TextInput>
			</View>
			<View style={{ flexDirection: "row" }}>
				<MaterialCommunityIcons
					name="food"
					size={25}
					style={{ alignSelf: "center" }}
				/>
				<TextInput
					style={Default.Input}
					placeholder="food group"
					onChangeText={(foodgroup) => setFoodGroup(foodgroup)}
				></TextInput>
			</View>
			<View style={{ flexDirection: "row" }}>
				<MaterialCommunityIcons
					name="camera"
					size={25}
					style={{ alignSelf: "center" }}
				/>
				<TouchableOpacity onPress={() => cameraLaunch()} style={Default.Input}>
					<QStext text={"Launch Camera"} p style={{ alignSelf: "center" }} />
				</TouchableOpacity>
			</View>
			<Button title={"Add"} onPress={() => submitIngredientHandler()} />

			<Button onPress={() => navigation.navigate("IngredientsList")} title={"Cancel"} />

		</View>
	);

}


export default AddIngredient;
