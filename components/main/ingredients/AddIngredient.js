import React, { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import OptionGroup from "react-native-optiongroup";

import firebase from "firebase/app";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Default from "../../UI-Components/Default";
import { QStext } from "../../UI-Components/QStext";

function AddIngredient() {
	const [name, setName] = useState("");
	const [expiratonDate, setExpirationDate] = useState("");
	const [foodGroup, setFoodGroup] = useState();
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
			<OptionGroup
				options={["Dairy", "Meat"]}
				onChange={(value) => console.log(value, "selected")}
			/>
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
