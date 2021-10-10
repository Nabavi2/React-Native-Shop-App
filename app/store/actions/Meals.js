export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";

export const toggleFavorites = (id) => {
  return { type: TOGGLE_FAVORITES, mealId: id };
};
