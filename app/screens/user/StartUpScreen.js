import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, Text, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import { AsyncStorage } from "react-native";
import * as authActions from "../../store/actions/auth";
import Colors from "../../constants/Colors";
function StartUpScreen(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (!userData) {
        props.navigation.navigate("Auth");
        return;
      }
      const transeFormData = JSON.parse(userData);
      const { token, userId, expiryDate } = transeFormData;
      const expirationDate = new Date(expiryDate);
      if (!expirationDate <= new Date() || !token || !userId) {
        props.navigation.navigate("Auth");
        return;
      }
      const expirationTime = expirationDate.getTime() - new Date().getTime;
      props.navigation.navigate("Shop");
      dispatch(authActions.authenticate(userId, token, expirationTime));
    };
    tryLogin();
  }, [dispatch]);

  return (
    <View>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
}

export default StartUpScreen;
