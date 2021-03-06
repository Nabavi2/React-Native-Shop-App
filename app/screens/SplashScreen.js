import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import Colors from "../constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { authenticate, didTryAutoLoginUser } from "../store/actions/auth";

function SplashScreen(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    const tryLogin = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (!userData) {
        dispatch(didTryAutoLoginUser());
        props.navigation.navigate("Auth");
        return;
      }
      const transformedData = JSON.parse(userData);
      const { token, userId, expiryDate } = transformedData;
      const expDate = new Date(expiryDate);
      if (expDate <= new Date() || !token || !userId) {
        dispatch(didTryAutoLoginUser());
        props.navigation.navigate("Auth");

        return;
      }
      const expiryTime = expDate.getTime() - new Date().getTime();
      // props.navigation.navigate("Shop");
      dispatch(authenticate(token, userId, expiryTime));
    };

    tryLogin();
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
