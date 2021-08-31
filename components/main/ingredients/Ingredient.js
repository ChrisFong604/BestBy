
import { StyleSheet, Text, View, Button } from "react-native";
import { QStext } from "../../UI-Components/QStext";
import React, { useState, useEffect, useFocusEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

/*
const Ingredient = ({ Ingredient }) => {
	const [date, setDate] = useState('');
	const [expdate, setExpdate] = useState('');

	useEffect(() => {
		let st = Ingredient.expirydate.toDate();
		let str = new Date(st);
		let curDate = new Date();
		let diffTime = str - curDate;
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		console.log(st.getDate());
		setDate(diffDays);
		setExpdate(st.getFullYear() + "-" + parseInt(st.getMonth() + 1) + "-" + st.getDate());
	}, [])

	return (
		<>
			<Text>{Ingredient.name}</Text>
			<Text>{Ingredient.foodgroup}</Text>
			<Text>Expiry date: {expdate}</Text>
			<Text>Days until expiry: {date}</Text>
			
			
		</>
	);
};*/

const Ingredient = ({ Ingredient }) => {
	let foodGroup;
	if (Ingredient.foodgroup == "fruits") {
		foodGroup = "food-apple";
	}

	return (
		<>
			<View style={{ flexDirection: "row" }}>
				<MaterialCommunityIcons
					name={foodGroup}
					size={25}
					style={{ alignSelf: "center" }}
				/>
				<View style={{ flex: 1 }}>
					<Text>{Ingredient.name}</Text>
				</View>
				<View style={{ flex: 2 }}>
					<Text>Exp. {Ingredient.expirydate.Time}</Text>
				</View>
			</View>
		</>
	);
};

export default Ingredient;
