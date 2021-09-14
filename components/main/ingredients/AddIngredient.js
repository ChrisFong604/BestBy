import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Button } from "react-native";
import Calendar from "react-calendar";
//import "react-calendar/dist/Calendar.css";
import firebase from "firebase";
import { auth, db } from "../../../firebase";
//import { Picker } from "@react-native-picker/picker";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Default from "../../UI-Components/Default";
import { QStext } from "../../UI-Components/QStext";
//import { PickerItem } from "react-native/Libraries/Components/Picker/Picker";

function AddIngredient({ navigation }) {
  const [name, setName] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [foodGroup, setFoodGroup] = useState("");

  const cameraLaunch = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };
    ImagePicker.launchCamera(options, (res) => {
      console.log("Response = ", res);

      if (res.didCancel) {
        console.log("User cancelled image picker");
      } else if (res.error) {
        console.log("ImagePicker Error: ", res.error);
      } else if (res.customButton) {
        console.log("User tapped custom button: ", res.customButton);
        alert(res.customButton);
      } else {
        const source = { uri: res.uri };
        console.log("response", JSON.stringify(res));
        this.setState({
          filePath: res,
          fileData: res.data,
          fileUri: res.uri,
        });
      }
    });
  };

  const submitIngredientHandler = async () => {
    const ref = firebase
      .firestore()
      .collection("users")
      .doc(auth.currentUser.uid)
      .update({
        inventory: firebase.firestore.FieldValue.arrayUnion({
          name: name,
          expirydate: expirationDate,
          foodgroup: foodGroup,
        }),
      })
      /*.set({
				inventory: [...inventory, newIngredient],
			})*/
      .then(() => {
        navigation.navigate("IngredientsList");
      });
  };

  return (
    <View style={Default.ViewContainer}>
      <QStext text={"Add Ingredient"} h3 />

      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          name="food-apple"
          size={25}
          style={{ alignSelf: "center" }}
        />
        <TextInput
          style={Default.Input}
          placeholder="name"
          onChangeText={(name) => setName(name)}
        ></TextInput>
      </View>

      <View style={{ flexDirection: "row" }}>
				<MaterialCommunityIcons
					name="food"
					size={25}
					style={{ alignSelf: "center" }}
				/>
				<Picker
					style={Default.Input}
					selectedValue={foodGroup}
					onValueChange={(itemValue, itemIndex) => setFoodGroup(itemValue)
				}>
					<Picker.Item label="Select..." value="null" />
					<Picker.Item label="Fruits" value="fruits" />
					<Picker.Item label="Meats" value="meats" />
					<Picker.Item label="Vegetables" value="vegetables" />
					<Picker.Item label="Grains" value="grains" />
					<Picker.Item label="Dairy" value="dairy" />
					<Picker.Item label="Other" value="other" />
				</Picker>
			</View>

      <View style={{ flexDirection: "row" }}>
        <MaterialCommunityIcons
          name="calendar"
          size={25}
          style={{ alignSelf: "center" }}
        />
        <Calendar
          onChange={(date) => {
            console.log(date);
            setExpirationDate(date);
          }}
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <Button title={"Add"} onPress={() => submitIngredientHandler()} />

        <Button
          onPress={() => navigation.navigate("IngredientsList")}
          title={"Cancel"}
        />
      </View>
    </View>
  );
}

export default AddIngredient;
