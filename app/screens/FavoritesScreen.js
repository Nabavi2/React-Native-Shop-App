import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";

import MealList from "../components/MealList";
function FavoritesScreen(props) {
  const favMeals = MEALS.filter(
    (meal) =>
      meal.id === "m1" ||
      meal.id === "m2" ||
      meal.id === "m4" ||
      meal.id === "m5" ||
      meal.id === "m4" ||
      meal.id === "m5"
  );
  return <MealList listData={favMeals} navigation={props.navigation} />;
}
FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavoritesScreen;
