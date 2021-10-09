import { MEALS } from "../../data/dummy-data";
const initialState = {
  meal: MEALS,
  filteredMeal: MEALS,
  favoritsMeal: [],
};
const MealReducer = (state = initialState, action) => {
  return state;
};

export default MealReducer;
