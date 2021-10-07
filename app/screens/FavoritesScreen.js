import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { MEALS } from "../data/dummy-data";

import MealList from "../components/MealList";
const FavoritesScreen = (props) => {
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
};
FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavoritesScreen;
