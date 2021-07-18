import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import Default from "../UI-Components/Default";
import { QStext } from "../UI-Components/QStext";

function ExpirationCalendar() {
	return (
		<SafeAreaView style={Default.ViewContainer}>
			<QStext text={"Expiration Calendar"} h2 />
		</SafeAreaView>
	);
}

export default ExpirationCalendar;
