import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import { QStext } from "../../UI-Components/QStext";

const Ingredient = ({ Ingredient }) => {
	return (
		<>
			<Text>{Ingredient.name}</Text>
			<Text>{Ingredient.email}</Text>
		</>
	);
};

export default Ingredient;
