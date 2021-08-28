
import { Text, View, Button } from "react-native";
import { QStext } from "../../UI-Components/QStext";
import React, { useState, useEffect, useFocusEffect } from "react";

const Ingredient = ({ Ingredient }) => {
	const [date, setDate] = useState('');

	useEffect(() => {
		var day = new Date().getDate();
		var month = new Date().getMonth();
		var year = new Date().getFullYear();
		setDate(day + '/' + month + '/' + year);
	}, [])

	return (
		<>
			<Text>{Ingredient.name}</Text>
			<Text>{Ingredient.foodgroup}</Text>
			<Text>{date}</Text>
		</>
	);
};

export default Ingredient;
