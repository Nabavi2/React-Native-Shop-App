import { Entypo } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import Card from "../UI/Card";

const ProductItem = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <Card style={styles.product}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.image }} />
            </View>
            <View style={styles.details}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Entypo name="price-ribbon" size={24} color="grey" />
                <Text style={styles.title}>{props.title}</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Entypo
                  name="price-tag"
                  size={24}
                  color="grey"
                  style={{ paddingRight: 3 }}
                />
                <Text style={styles.price}>
                  ${parseFloat(props.price).toFixed(2)}
                </Text>
              </View>
              <View style={styles.actions}>{props.children}</View>
            </View>
          </View>
        </TouchableCmp>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 250,
    margin: 20,
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  imageContainer: {
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "17%",
    padding: 10,
    marginTop: 5,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    marginVertical: 2,
  },
  price: {
    fontFamily: "open-sans",
    fontSize: 14,
    color: "#888",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "23%",
  },
});

export default ProductItem;
