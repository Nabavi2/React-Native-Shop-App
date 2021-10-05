import React from "react";
import { View, StyleSheet, Text } from "react-native";

function FavoritesScreen(props) {
  return (
    <View style={styles.container}>
      <Text>This is the favorite screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FavoritesScreen;
