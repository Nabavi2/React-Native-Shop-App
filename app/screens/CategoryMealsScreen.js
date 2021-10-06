import React from "react";

import Colors from "../constants/Colors";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
function CategoryMealsScreen(props) {
  const catId = props.navigation.getParam("categoryId");
  const desplayMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={desplayMeals} navigation={props.navigation} />;
}

CategoryMealsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Meals Screen",
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

export default CategoryMealsScreen;
