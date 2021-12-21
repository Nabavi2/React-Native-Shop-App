import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator, ShopNavigator } from "./ShopNavigator";
import SplashScreen from "../screens/SplashScreen";

function AppNavigator(props) {
  const isAuth = useSelector((state) => !!state.auth.token);
  const didTryAL = useSelector((state) => state.auth.didTryAL);
  return (
    <NavigationContainer>
      {isAuth && <ShopNavigator />}
      {!isAuth && didTryAL && <AuthNavigator />}
      {!isAuth && !didTryAL && <SplashScreen />}
    </NavigationContainer>
  );
}

export default AppNavigator;
