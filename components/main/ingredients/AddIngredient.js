import React, { useState } from "react";
import { View, TextInput } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Default from "../../UI-Components/Default";
import { QStext } from "../../UI-Components/QStext";

function AddIngredient() {
	const [name, setName] = useState("");
	const [expiratonDate, setExpirationDate] = useState("");

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
			<Button onPress={() => navigator.navigate("IngredientsList")} title={"Cancel"} />
		</View>
	);
}

export default AddIngredient;
