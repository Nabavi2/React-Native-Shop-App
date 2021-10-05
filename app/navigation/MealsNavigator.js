// import { Platform } from "react-native";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
// import { createBottomTabNavigator } from "react-navigation-tabs";
// import { Ionicons } from "@expo/vector-icons";
// import Colors from "../constants/Colors";

// import CategoriesScreen from "../screens/CategoriesScreen";
// import CategoryMealsScreen from "../screens/CategoryMealsScreen";
// import MealDetailScreen from "../screens/MealDetailScreen";
// import FavoritesScreen from "./../screens/FavoritesScreen";

// const MealsNavigator = createStackNavigator(
//   {
//     Categories: {
//       screen: CategoriesScreen,
//       navigationOptions: {
//         headerTitle: "Meal Categories",
//       },
//     },
//     CategoryMeals: {
//       screen: CategoryMealsScreen,
//     },
//     MealDetail: MealDetailScreen,
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: Platform.OS === "android" ? Colors.primary : "",
//       },
//       headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
//     },
//   }
// );
// const mealFavNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(): createBottomTabNavigator({
//   Meals: {
//     screen: MealsNavigator,
//     navigationOptions: {
//       tabBarIcon: (tabInfo) => {
//         return (
//           <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
//         );
//       },
//     },
//   },
//   Favorites: {
//     screen: FavoritesScreen,
//     navigationOptions: {
//       tabBarIcon: (tabInfo) => {
//         return <Ionicons name="ios-star" size={24} color={tabInfo.tintColor} />;
//       },
//     },
//   },
//   {
//     tabBarOptions:{
//       activeTintColor: Colors.accent
//     }
//   }
// });

// export default createAppContainer(mealFavNavigator);
// import React from "react";
// import { Platform } from "react-native";
// import {
//   createStackNavigator,
//   createBottomTabNavigator,
//   createAppContainer,
// } from "react-navigation";
import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/Colors";

const defaultStackOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
  headerTitle: "Meal Categories",
};
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackOptions,
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackOptions,
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primary,
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accent,
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: "white",
        shifting: true,
        barStyle: {
          backgroundColor: Colors.primary,
        },
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accent,
        },
      });

export default createAppContainer(MealsFavTabNavigator);
