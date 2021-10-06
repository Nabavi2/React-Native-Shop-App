import React, { useState } from "react";
import { View, StyleSheet, Text, Switch } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const SwitchFilter = (props) => {
  return (
    <View style={styles.Cotainer}>
      <Text style={styles.title}>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.primary, false: "light-grey" }}
        value={props.state}
        thumbColor={Colors.primary}
        onValueChange={props.onGhange}
      />
    </View>
  );
};

function FiltersScreen(props) {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactosFree, setIsLactosFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  return (
    <View style={styles.screen}>
      <Text style={styles.text}> Available Filters </Text>
      <SwitchFilter
        label="Is GlutenFree"
        state={isGlutenFree}
        onGhange={(newValue) => setIsGlutenFree(newValue)}
      />
      <SwitchFilter
        label="Is LactosFree"
        state={isLactosFree}
        onGhange={(newValue) => setIsLactosFree(newValue)}
      />
      <SwitchFilter
        label="Is Vegan"
        state={isVegan}
        onGhange={(newValue) => setIsVegan(newValue)}
      />
      <SwitchFilter
        label="Is Vegetarian"
        state={isVegetarian}
        onGhange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
}

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    marginTop: 20,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    margin: 15,
    textAlign: "center",
  },
  Cotainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
});

export default FiltersScreen;
