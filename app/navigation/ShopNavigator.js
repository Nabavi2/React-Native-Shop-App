// import React from 'react';
// import {
//   createStackNavigator,
//   createDrawerNavigator,
//   createSwitchNavigator,
//   createAppContainer
// } from 'react-navigation';
// import { Platform } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
// import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
// import CartScreen from '../screens/shop/CartScreen';
// import OrdersScreen from '../screens/shop/OrdersScreen';
// import UserProductsScreen from '../screens/user/UserProductsScreen';
// import EditProductScreen from '../screens/user/EditProductScreen';
// import AuthScreen from '../screens/user/AuthScreen';
// import Colors from '../constants/Colors';

// const defaultNavOptions = {
//   headerStyle: {
//     backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
//   },
//   headerTitleStyle: {
//     fontFamily: 'open-sans-bold'
//   },
//   headerBackTitleStyle: {
//     fontFamily: 'open-sans'
//   },
//   headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
// };

// const ProductsNavigator = createStackNavigator(
//   {
//     ProductsOverview: ProductsOverviewScreen,
//     ProductDetail: ProductDetailScreen,
//     Cart: CartScreen
//   },
//   {
//     navigationOptions: {
//       drawerIcon: drawerConfig => (
//         <Ionicons
//           name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
//           size={23}
//           color={drawerConfig.tintColor}
//         />
//       )
//     },
//     defaultNavigationOptions: defaultNavOptions
//   }
// );

// const OrdersNavigator = createStackNavigator(
//   {
//     Orders: OrdersScreen
//   },
//   {
//     navigationOptions: {
//       drawerIcon: drawerConfig => (
//         <Ionicons
//           name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
//           size={23}
//           color={drawerConfig.tintColor}
//         />
//       )
//     },
//     defaultNavigationOptions: defaultNavOptions
//   }
// );

// const AdminNavigator = createStackNavigator(
//   {
//     UserProducts: UserProductsScreen,
//     EditProduct: EditProductScreen
//   },
//   {
//     navigationOptions: {
//       drawerIcon: drawerConfig => (
//         <Ionicons
//           name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
//           size={23}
//           color={drawerConfig.tintColor}
//         />
//       )
//     },
//     defaultNavigationOptions: defaultNavOptions
//   }
// );

// const ShopNavigator = createDrawerNavigator(
//   {
//     Products: ProductsNavigator,
//     Orders: OrdersNavigator,
//     Admin: AdminNavigator
//   },
//   {
//     contentOptions: {
//       activeTintColor: Colors.primary
//     }
//   }
// );

// const AuthNavigator = createStackNavigator(
//   {
//     Auth: AuthScreen
//   },
//   {
//     defaultNavigationOptions: defaultNavOptions
//   }
// );

// const MainNavigator = createSwitchNavigator({
//   Auth: AuthNavigator,
//   Shop: ShopNavigator
// });

// export default createAppContainer(MainNavigator);
import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";
import { Platform, SafeAreaView, Button, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import UserProductsScreen from "../screens/user/UserProductsScreen";
import EditProductScreen from "../screens/user/EditProductScreen";
import AuthScreen from "../screens/user/AuthScreen";
import StartUpScreen from "../screens/user/StartUpScreen";
import Colors from "../constants/Colors";
import * as authActions from "../store/actions/auth";

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-list" : "ios-list"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const AdminNavigator = createStackNavigator(
  {
    UserProducts: UserProductsScreen,
    EditProduct: EditProductScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          name={Platform.OS === "android" ? "md-create" : "ios-create"}
          size={23}
          color={drawerConfig.tintColor}
        />
      ),
    },
    defaultNavigationOptions: defaultNavOptions,
  }
);

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
    },
    contentComponent: (props) => {
      const dispatch = useDispatch();
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
            <DrawerItems {...props} />
            <Button
              title="Logout"
              color={Colors.primary}
              onPress={() => {
                dispatch(authActions.logout());
                props.navigation.navigate("Auth");
              }}
            />
          </SafeAreaView>
        </View>
      );
    },
  }
);
const AuthNavigation = createStackNavigator(
  {
    Auth: AuthScreen,
  },
  {
    defaultNavigationOptions: defaultNavOptions,
  }
);
const MainNavigator = createSwitchNavigator({
  StartUp: StartUpScreen,
  Auth: AuthNavigation,
  Shop: ShopNavigator,
});
export default createAppContainer(MainNavigator);
