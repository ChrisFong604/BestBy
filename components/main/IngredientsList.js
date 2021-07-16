import React from "react";
import { View, Text, SafeAreaView, Button } from "react-native";

import { QStext } from "../UI-Components/QStext";
import Default from "../UI-Components/Default";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//const addButton = <Icon.Button name="plus-circle" backgroundColor="black" />;

function IngredientsList() {
	return (
		<SafeAreaView style={Default.ViewContainer}>
			<View style={{ flexDirection: "row" }}>
				<QStext text={"Current Inventory"} h2 />
			</View>
			<MaterialCommunityIcons.Button
				name="plus-circle"
				color={"black"}
				iconStyle={{
					margin: 0,
					padding: 0,
					alignItems: "center",
					justifyContent: "center",
				}}
				backgroundColor={"orange"}
				size={20}
				borderRadius={100}
			>
				<QStext text={"Add Ingredient"} p />

				{
					//Display Ingredient DB here
				}
			</MaterialCommunityIcons.Button>
		</SafeAreaView>
	);
}

export default IngredientsList;
