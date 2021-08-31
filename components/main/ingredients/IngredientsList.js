import React, { useState, useEffect, useFocusEffect } from "react";
import { View, SafeAreaView, ActivityIndicator } from "react-native";
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
	const [foodInventory, setFoodInventory] = useState();

	const fetchData = async () => {
		const ref = db.collection("users");

		const listener = ref
			.doc(firebase.auth().currentUser.uid)
			.onSnapshot((doc) => {
				console.log("Listener returns: ", doc.data());
				const doc1 = doc;

				setFoodInventory(doc1.data().inventory);
			});

		const doc = await ref.doc(firebase.auth().currentUser.uid).get();

		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return loading ? (
		<SafeAreaView style={Default.ViewContainer}>
			<View style={{ flexDirection: "row"}}>
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
			<ActivityIndicator size="large" color="blue" />
		</SafeAreaView>
	) : (
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

			{foodInventory.map((food, index) => (
				<Ingredient key={index} Ingredient={food} />
			))}
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
