import * as React from "react";
import { Text } from "react-native";

import {
	useFonts,
	Quicksand_300Light,
	Quicksand_400Regular,
	Quicksand_500Medium,
	Quicksand_600SemiBold,
	Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

const QStext = ({ h1, h2, h3, h4, p, bold, italic, text, style, ...rest }) => {
	let [fontsLoaded] = useFonts({
		Quicksand_300Light,
		Quicksand_400Regular,
		Quicksand_500Medium,
		Quicksand_600SemiBold,
		Quicksand_700Bold,
	});

	if (!fontsLoaded) {
		return <Text>{text}</Text>;
	} else {
		return (
			<Text
				style={[
					h1 && { fontSize: 50 },
					h2 && { fontSize: 32 },
					h3 && { fontSize: 25 },
					h4 && { fontSize: 20 },
					p && { fontSize: 15 },
					bold && { fontWeight: "bold" },
					italic && { fontStyle: "italic" },
					{ fontFamily: "Quicksand_400Regular" },
					style,
				]}
				{...rest}
			>
				{text}
			</Text>
		);
	}
};

export { QStext };
