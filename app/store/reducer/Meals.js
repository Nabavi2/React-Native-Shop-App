import { MEALS } from "../../data/dummy-data";

import { TOGGLE_FAVORITES } from "../actions/Meals";
const initialState = {
  meals: MEALS,
  filteredMeal: MEALS,
  favoritsMeal: [],
};
const MealReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITES:
      const existingIndex = state.favoritsMeal.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updateFavMeal = [...state.favoritsMeal];
        updateFavMeal.slice(existingIndex, 1);
        return { ...state, favoriteMeals: updateFavMeal };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoritsMeal.concat(meal) };
      }
    default:
      return state;
  }
};

export default MealReducer;
