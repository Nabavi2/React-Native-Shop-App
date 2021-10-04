import React from "react";
import { View, StyleSheet, Text } from "react-native";

function MealDetailScreen(props) {
  return (
    <View style={styles.container}>
      <Text>This is the meal detail screen.</Text>
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

export default MealDetailScreen;
