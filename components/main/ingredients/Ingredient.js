import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { QStext } from "../../UI-Components/QStext";

const Ingredient = () => {
	const [ingredient, setIngredient] = useState({
		name: "pineapple",
		expirydate: "tomorrow",
		foodgroup: "fruits",
	});

	return (
		<>
			<Text>{ingredient.name}</Text>
			<Text>{ingredient.expirydate}</Text>
			<Text>{ingredient.foodgroup}</Text>
		</>
	);
};

export default Ingredient;
