import React, { Component } from "react";
import { Text, View } from "react-native";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../redux/actions/index";

import { QStext } from "./UI-Components/QStext";
import Default from "./UI-Components/Default";

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
			<View style={Default.ViewContainer}>
				<QStext text={currentUser.name + " is logged in"} h2 />
				<QStext text={currentUser.name + " is logged in"} h3 />
				<QStext text={currentUser.name + " is logged in"} h4 />
				<QStext text={currentUser.name + " is logged in"} p />
			</View>
		);
	}
}

const mapStateToProps = (store) => ({
	currentUser: store.userState.currentUser,
});
const mapDispatchProps = (dispatch) =>
	bindActionCreators({ fetchUser }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);
