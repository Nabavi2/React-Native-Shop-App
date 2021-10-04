import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Colors from "../constants/Colors";
import { CATEGORIES } from "../data/dummy-data";

function CategoryMealsScreen(props) {
  const cateId = props.navigation.getParam("categoryId");
  const cate = CATEGORIES.find((item) => item.id === cateId);
  return (
    <View style={styles.container}>
      <Text>This is the category meal screen.</Text>
      <Text>{cate.title}</Text>
      {/* <Button
        title="go to meal detail"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      /> */}
    </View>
  );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const cateId = navigationData.navigation.getParam("categoryId");
  const cate = CATEGORIES.find((item) => item.id === cateId);

  return {
    headerTitle: cate.title,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
