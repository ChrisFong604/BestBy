import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { QStext } from "../../UI-Components/QStext";
import Default from "../../UI-Components/Default";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Ingredient from "./Ingredient";
import AddIngredient from "./AddIngredient";
//import db from "../FireBase";
import firebase from "firebase";


const fetchUserInfo = () => {
	let info = [];

	firebase.firestore().collection("users").get().then((snapshot) => {
		snapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			info.push(doc.data())
			//temp.push()
		}
	);
	})

	return info;
}

//const addButton = <Icon.Button name="plus-circle" backgroundColor="black" />;
function IngredientsListScreen({ navigation }) {
	const [userInfo, setUserInfo] = useState(null);

	window.addEventListener("load", () => {
		fetchUserInfo();
	});

	const fetchUserInfo = async () => {
		const data = await firebase
			.firestore()
			.collection("users")
			.doc(firebase.auth().currentUser.uid)
			.get()

			.then((res) => setUserInfo(res.data()))
			//.then(console.log(userInfo));
	};

	const [data, setData] = useState({
		email: "Jacob@gmail.com",
		name: "Jacob",

		inventory: [
			
		],
	});
	
	//console.log("userinfo")
	//console.log(userInfo);

	useEffect(() => {
		setUserInfo(fetchUserInfo());
		console.log(userInfo);
		firebase
			.firestore()
			.collection("users")
			.get()
			.then((snapshot) => {
				const userdata = [];
				snapshot.forEach((doc) => {
					// doc.data() is never undefined for query doc snapshots
					console.log(doc.data());
					//temp.push()
					
					userdata.push(doc.data());
				});
				console.log(userdata);
				setData({ inventory: userdata });
				console.log("DATA.INVENTORY RIGHT AFTER SETDATA")
				console.log(data.inventory)
			})
			.catch((error) => console.log("error"));
		console.log("DATA.INVENTORY")
		console.log(data.inventory);
	}, []);
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
			
			<View>
				{data.inventory.map((ingredient) => (
					<Ingredient key={ingredient.name} Ingredient={ingredient} />
				))}
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
