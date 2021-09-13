import { StyleSheet, Text, View, Button } from "react-native";
import { QStext } from "../../UI-Components/QStext";
import React, { useState, useEffect, useFocusEffect } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import firebase from "firebase";
import { auth, db } from "../../../firebase";

const Ingredient = ({ Ingredient, EditPage }) => {
  let foodGroup;
  if (Ingredient.foodgroup == "fruits") {
    foodGroup = "food-apple";
  } else if (Ingredient.foodgroup == "vegetables") {
    foodGroup = "corn";
  } else if (Ingredient.foodgroup == "meats") {
    foodGroup = "food-drumstick";
  } else if (Ingredient.foodgroup == "grains") {
    foodGroup = "baguette";
  } else if (Ingredient.foodgroup == "dairy") {
    foodGroup = "cow";
  } else if (Ingredient.foodgroup == "other") {
    foodGroup = "food-variant";
  }

  const [date, setDate] = useState("");
  const [expdate, setExpdate] = useState("");

  useEffect(() => {
    let st = Ingredient.expirydate.toDate();
    let str = new Date(st);
    let curDate = new Date();
    let diffTime = str - curDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(st.getDate());

    if (diffDays <= 0) {
      setDate("Expired");
    } else {
      setDate(diffDays);
    }
    setExpdate(
      st.getFullYear() + "-" + parseInt(st.getMonth() + 1) + "-" + st.getDate()
    );
  }, []);

  const deleteIngredientHandler = async () => {
    const ref = firebase
      .firestore()
      .collection("users")
      .doc(auth.currentUser.uid)
      .update({
        inventory: firebase.firestore.FieldValue.arrayRemove(Ingredient),
      });
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <MaterialCommunityIcons
            name={foodGroup}
            size={25}
            style={{ flex: 1, alignSelf: "center" }}
          />
          <View style={{ flex: 2, alignSelf: "center" }}>
            <QStext text={Ingredient.name} h4 />
          </View>
          <View style={{ flex: 3, alignSelf: "center" }}>
            <QStext text={"Exp date: " + expdate} p />
          </View>
          <View style={styles.button}>
            <Button color="#035e7b" title={"Edit"} onPress={() => EditPage()} />
          </View>
        </View>

        <View style={styles.row}>
          <View style={{ flex: 2, alignSelf: "center" }}>
            <QStext text={"Days before expiration: " + date} p />
          </View>
          <View style={styles.button}>
            <Button
              color="#ff0000"
              title={"Delete"}
              onPress={() => deleteIngredientHandler()}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#20232a",
    borderRadius: 6,
    padding: 15,
    margin: 15,
  },
  row: {
    flexDirection: "row",
    width: 300,
    alignSelf: "center",
    marginVertical: 5,
  },
  button: {
    width: 70,
    alignSelf: "flex-end",
  },
});

export default Ingredient;