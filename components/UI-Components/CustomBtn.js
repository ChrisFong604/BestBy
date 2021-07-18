import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import Default from "./Default";

function CustomBtn({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text style={{ padding: 20, borderColor: "black" }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const btnstyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#89909F",
    padding: 10,
  },
});

export default CustomBtn;
