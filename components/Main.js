import React, { Component } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../redux/actions/index";

import { QStext } from "./UI-Components/QStext";
import Default from "./UI-Components/Default";
import IngredientsList from "./main/IngredientsList";
import ExpirationCalendar from "./main/ExpirationCalendar";
import LandingScreen from "./auth/Landing";
import AccountScreen from "./main/Account";

const Tab = createBottomTabNavigator();
export class Main extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		const { currentUser } = this.props;

		if (currentUser == undefined) {
			return <View></View>;
		}

		return (
			<Tab.Navigator>
				<Tab.Screen
					name="Inventory"
					component={IngredientsList}
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

const mapStateToProps = (store) => ({
	currentUser: store.userState.currentUser,
});
const mapDispatchProps = (dispatch) =>
	bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
