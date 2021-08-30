import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { QStext } from "../../UI-Components/QStext";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


/*const Ingredient = () => {
	const [ingredient, setIngredient] = useState({
		name: "pineapple",
		expirydate: "tomorrow",
		foodgroup: "fruits",
	});

	return (
		<>
			<Text>{Ingredient.name}</Text>
		</>
	);
};*/

const Ingredient = ({ Ingredient }) => {
	let foodGroup;
	if (Ingredient.foodgroup == "fruits") {
		foodGroup = "food-apple";
	} 

	return (
		
	  <View style={{ flexDirection: 'row'}}>
		<MaterialCommunityIcons
			name={foodGroup}
			size={25}
			style={{ alignSelf: "center" }}
		/>
		<View style={{ flex: 1}}>
			<Text>{Ingredient.name}</Text>
		</View>
		<View style={{ flex: 2}}>
			<Text>Exp. {Ingredient.expirydate}</Text>
		</View>
	  </View>
	);
};

export default Ingredient;
