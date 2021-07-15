import React from "react";
import { QStext } from "../UI-Components/QStext";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function AddIngredient() {
	return (
		<View>
			<QStext text={"Add Ingredient"} h3 />
			<MaterialCommunityIcons name="shaker" color={color} size={50} />
		</View>
	);
}

export default AddIngredient;
