import React from "react";

import Colors from "../constants/Colors";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
function CategoryMealsScreen(props) {
  const catId = props.navigation.getParam("categoryId");
  const desplayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={desplayMeals} navigation={props.navigation} />;
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const cateId = navigationData.navigation.getParam("categoryId");
  const cate = CATEGORIES.find((item) => item.id === cateId);

  return {
    headerTitle: cate.title,
  };
};

export default CategoryMealsScreen;
