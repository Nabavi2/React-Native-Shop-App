import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import Colors from "../constants/Colors";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
function CategoryMealsScreen(props) {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        onSelectedMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  const catId = props.navigation.getParam("categoryId");
  const desplayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={desplayMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
        style={{ width: "100%" }}
      />
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
    padding: 10,
  },
});

export default CategoryMealsScreen;
