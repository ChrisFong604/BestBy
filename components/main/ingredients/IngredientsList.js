import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { QStext } from "../../UI-Components/QStext";
import Default from "../../UI-Components/Default";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Ingredient from "./Ingredient";
import AddIngredient from "./AddIngredient";

import firebase from "firebase";
import { db } from "../../../firebase";
import { data } from "browserslist";

//const addButton = <Icon.Button name="plus-circle" backgroundColor="black" />;
function IngredientsListScreen({ navigation }) {
	const [loading, setLoading] = useState(true);
	const [userInfo, setUserInfo] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const ref = db.collection("users");
			const doc = await ref.doc(firebase.auth().currentUser.uid).get();
			setUserInfo(doc.data());
			setLoading(false);
		};
		fetchData();
	}, []);
	//Get all user data
	if (loading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<QStext text={"Loading"} h2 />
			</View>
		);
	}
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
				onPress={() => navigation.navigate("AddIngredient")}
			>
				<QStext text={"Add Ingredient"} p />
			</MaterialCommunityIcons.Button>

			<Text>{userInfo.name}</Text>
			<Text>{userInfo.email}</Text>
			{
				//Display Ingredient DB here
			}
		</SafeAreaView>
	);
}

const Stack = createStackNavigator();

function IngredientStack() {
	return (
		<Stack.Navigator initialRouteName="IngredientsListScreen">
			<Stack.Screen
				name="IngredientsList"
				component={IngredientsListScreen}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="AddIngredient"
				component={AddIngredient}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}

export default IngredientStack;
