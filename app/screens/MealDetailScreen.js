import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
function MealDetailScreen(props) {
  const mealId = props.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View style={styles.container}>
      <Text>{selectedMeal.title}</Text>
    </View>
  );
}
MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headrTitle: selectedMeal.title,
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
