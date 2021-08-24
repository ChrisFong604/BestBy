import React, { Component, useContext } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { AuthContext } from "../context/UserContext";

import ExpirationCalendar from "./main/ExpirationCalendar";
import LandingScreen from "./auth/Landing";
import AccountScreen from "./main/Account";
import IngredientStack from "./main/ingredients/IngredientsList";

import Default from "./UI-Components/Default";
import { QStext } from "./UI-Components/QStext";

const Tab = createBottomTabNavigator();

function Main() {
	const { user } = useContext(AuthContext);

	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Inventory"
				children={() => (
					<IngredientStack 
						username={user.displayName}
						useremail={user.email}
					/>
				)}
				
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="shaker" color={color} size={30} />
					),
				}}
			/>
			<Tab.Screen
				name="Calendar"
				component={ExpirationCalendar}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons name="calendar" color={color} size={30} />
					),
				}}
			/>
			<Tab.Screen
				name={"Account"}
				children={() => (
					<AccountScreen
						username={user.displayName}
						useremail={user.email}
						isAnon={user.isAnonymous}
					/>
				)}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name="account-circle"
							color={color}
							size={30}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}

/*
export class Main extends Component {
	//fetchUser does not work with Anonymous users, returns undefined
	componentDidMount() {
		this.props.fetchUser();
	}

	render() {
		let { currentUser } = this.props;
		if (currentUser == undefined) {
			currentUser = { name: "Anonymous User" };
			console.log(currentUser.name);
		}

		const { user } = useContext(AuthContext);

		return (
			<Tab.Navigator>
				<Tab.Screen
					name="Inventory"
					component={IngredientStack}
					options={{
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons name="shaker" color={color} size={30} />
						),
					}}
				/>
				<Tab.Screen
					name="Calendar"
					component={ExpirationCalendar}
					options={{
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons name="calendar" color={color} size={30} />
						),
					}}
				/>
				<Tab.Screen
					name={"Account"}
					children={() => <AccountScreen username={user.displayName} />}
					options={{
						tabBarIcon: ({ color, size }) => (
							<MaterialCommunityIcons
								name="account-circle"
								color={color}
								size={30}
							/>
						),
					}}
				/>
			</Tab.Navigator>
		);
	}
}
*/

export default Main;
