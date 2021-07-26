import React, { Component, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../redux/actions/index";

import { QStext } from "./UI-Components/QStext";
import Default from "./UI-Components/Default";
import ExpirationCalendar from "./main/ExpirationCalendar";
import LandingScreen from "./auth/Landing";
import AccountScreen from "./main/Account";
import IngredientStack from "./main/ingredients/IngredientsList";

const Tab = createBottomTabNavigator();
/*
function Main() {
	let currentUser = null;
	useEffect(() => {
		currentUser = fetchUser();
	})	
}

*/

function Main() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		setUser(fetchUser());
	}, []);

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
				children={() => <AccountScreen user={user} />}
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
					children={(props) => <AccountScreen currentUser={currentUser} />}
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
const mapStateToProps = (store) => ({
	currentUser: store.userState.currentUser,
});
const mapDispatchProps = (dispatch) =>
	bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
