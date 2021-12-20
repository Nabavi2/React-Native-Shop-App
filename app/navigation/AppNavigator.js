import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { ShopNavigator, AuthNavigation } from "./ShopNavigator";
import StartUpScreen from "../screens/user/StartUpScreen";
const AppNavigator = (props) => {
  const isAuth = useSelector((state) => !!state.auth.token);
  const didTryAuthoLogin = useSelector((state) => !!state.auth.didTryAuthoLogin);
  return (
    <NavigationContainer>
      {isAuth && <ShopNavigator />}
      {!isAuth && didTryAuthoLogin && <AuthNavigation />}
      {!isAuth && !didTryAuthoLogin && <StartUpScreen />}
    </NavigationContainer>
  );
};

export default AppNavigator;
