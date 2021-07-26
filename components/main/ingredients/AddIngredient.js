import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Default from "../../UI-Components/Default";
import { QStext } from "../../UI-Components/QStext";

function AddIngredient() {
	const [name, setName] = useState("");
	const [expiratonDate, setExpirationDate] = useState("");

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
					onChange={(name) => setName(name)}
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
					onChange={(date) => setExpirationDate(date)}
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
		</View>
	);
}

export default AddIngredient;
