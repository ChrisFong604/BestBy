import React, { useState } from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { QStext } from "../../UI-Components/QStext";
import Default from "../../UI-Components/Default";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Ingredient from "./Ingredient";
import AddIngredient from "./AddIngredient";
//import db from "../FireBase";
import firebase from "firebase";

//const addButton = <Icon.Button name="plus-circle" backgroundColor="black" />;
function IngredientsListScreen({ username, useremail, navigation }) {
	
	const [data, setData] = useState({
		email: useremail,
		name: username,

		inventory: [
			{
				"name": "apple",
				"expirydate": "2021-07-21",
				"foodgroup": "fruits",
				"id": "123"
			},
			{
				"name": "orange",
				"expirydate": "2021-07-21",
				"foodgroup": "fruits",
				"id": "1234"
			},
			{
				"name": "aaa",
				
				"id": "12345"
			}
		]
	});

	const b = {
		inventory: []
	};
	console.log("USERNAME ---------------> " + username);
	

	firebase
		.firestore()
		.collection("users")
		.get()
		.then(snapshot => {
			snapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				
				console.log("DOC.DATA.INVENTORY BELOW")
				console.log(doc.id, " => ", doc.data().inventory);
				data.inventory.push(doc.data());
				b.inventory.push(doc.data());
				console.log("THIS IS WHAT IS BEING PUSHED")
				console.log(doc.data())
				
				//temp.push()
			});
		})
		//.catch (error => console.log("error"));

	//Get all user data

	/*
		{
			email: "bob@gmail.com",
			name: "bob wazowski",

			inventory: [
				{
					"name": "apple",
					"expiry-date": "2021-07-21",
					"food-group": "fruits"
				},
				{
					"name": "orange",
					"expiry-date": "2021-07-21",
					"food-group": "fruits"
				}
			]
		}
	*/
	
	console.log(b.inventory);
	console.log("this is b ^^^^^^^^^^^^^^^^^");
	
	
	let a = data.inventory
	console.log("DATA INVENTORY BELOW -------------------------------------------")
	console.log(data.inventory);
	console.log("SENDING --------------------------------->>>>>>>>>>>>")
	
	return (
		<SafeAreaView style={Default.ViewContainer}>
			<View style={{ flexDirection: "row" }}>
				<QStext text={"Current Inventory"} h2 />
			</View>
			
			<Text>{username}</Text>

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

			<View>
				{data.inventory.map((ingredient) => <Ingredient key = {ingredient.id} Ingredient={ingredient}/>)}
			</View>

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
