import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import DefaultText from "../../components/DefaultText";

const ProductsOverviewScreen = (props) => {
  const products = useSelector((state) => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <DefaultText>{itemData.item.title}</DefaultText>
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: "All Products",
};

export default ProductsOverviewScreen;
