import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { enableScreens } from "react-native-screens";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MealsNavigator from "./app/navigation/MealsNavigator";

enableScreens();

const fetchFont = () => {
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={(error) => console.log(error)}
      />
    );
  }

  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
