import React, { Component } from "react";
import { TabBarIOS, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../redux/actions/index";

import { QStext } from "./UI-Components/QStext";
import Default from "./UI-Components/Default";

const Tab = createBottomTabNavigator();
export class Main extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		const { currentUser } = this.props;

		console.log();
		if (currentUser == undefined) {
			return <View></View>;
		}

		return (
			<Tab.Navigator>
				<Tab.Screen name="Home" component={HomeScreen} />
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
