import React from "react";
import {
  Button,
  Platform,
  SafeAreaView,
  View,
  Pressable,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

import ProductsOverviewScreen, {
  ProductsOverviewScreenOptions,
} from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen, {
  ProductDetailScreenOptions,
} from "../screens/shop/ProductDetailScreen";
import CartScreen, { CartScreenOptions } from "../screens/shop/CartScreen";
import OrdersScreen, {
  OrdersScreenOptions,
} from "../screens/shop/OrdersScreen";
import UserProductsScreen, {
  UserProductsScreenOptions,
} from "../screens/user/UserProductsScreen";
import EditProductScreen, {
  EditProductScreenOptions,
} from "../screens/user/EditProductScreen";
import Colors from "../constants/Colors";
import AuthScreen, { AuthScreenOptions } from "../screens/user/Auth";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/auth";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import authActions from "../store/actions/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

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

const ProductsStackNavigator = createStackNavigator();

const ProductsNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <ProductsStackNavigator.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
        options={ProductsOverviewScreenOptions}
      />
      <ProductsStackNavigator.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={ProductDetailScreenOptions}
      />
      <ProductsStackNavigator.Screen
        name="Cart"
        component={CartScreen}
        options={CartScreenOptions}
      />
    </ProductsStackNavigator.Navigator>
  );
};

const OrdersStackNavigator = createStackNavigator();
const OrdersNavigator = () => {
  return (
    <OrdersStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <OrdersStackNavigator.Screen
        name="Orders"
        component={OrdersScreen}
        options={OrdersScreenOptions}
      />
    </OrdersStackNavigator.Navigator>
  );
};
const AdminStackNavigator = createStackNavigator();
const AdminNavigator = () => {
  return (
    <AdminStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AdminStackNavigator.Screen
        name="UserProducts"
        component={UserProductsScreen}
        options={UserProductsScreenOptions}
      />
      <AdminStackNavigator.Screen
        name="EditProduct"
        component={EditProductScreen}
        options={EditProductScreenOptions}
      />
    </AdminStackNavigator.Navigator>
  );
};
const ShopDrawerNavigator = createDrawerNavigator();
export const ShopNavigator = () => {
  const dispatch = useDispatch();
  return (
    <ShopDrawerNavigator.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.primary,
      }}
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1 }}>
            <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
              <Image
                source={require("../../assets/eco.jpg")}
                style={{ width: "100%", height: 200, marginBottom: 10 }}
              />
              <DrawerItemList {...props} />
              <TouchableOpacity
                style={{
                  width: "55%",
                  height: 35,
                  flexDirection: "row",
                  backgroundColor: "transparent",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={async () => {
                  await dispatch(logout());
                  // props.navigation.navigate("Auth");
                }}
              >
                <SimpleLineIcons
                  name="logout"
                  size={24}
                  color="#6e6766"
                  style={{ marginRight: 5 }}
                />
                <Text
                  style={{
                    color: "#6e6766",
                    fontSize: 14,
                    fontWeight: "500",
                    marginLeft: 25,
                  }}
                >
                  Logout
                </Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        );
      }}
    >
      <ShopDrawerNavigator.Screen
        name="Products"
        component={ProductsNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              style={{ marginLeft: 10 }}
              name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <ShopDrawerNavigator.Screen
        name="Orders"
        component={OrdersNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              style={{ marginLeft: 10 }}
              name={Platform.OS === "android" ? "md-list" : "ios-list"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
      <ShopDrawerNavigator.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          drawerIcon: (props) => (
            <Ionicons
              style={{ marginLeft: 10 }}
              name={Platform.OS === "android" ? "md-create" : "ios-create"}
              size={23}
              color={props.color}
            />
          ),
        }}
      />
    </ShopDrawerNavigator.Navigator>
  );
};
const AuthStackNavigator = createStackNavigator();
export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator
      initialRouteName="Auth"
      screenOptions={defaultNavOptions}
    >
      <AuthStackNavigator.Screen
        name="Auth"
        component={AuthScreen}
        options={AuthScreenOptions}
      />
    </AuthStackNavigator.Navigator>
  );
};
