import React, { useState } from "react";
import * as Font from "expo-font";

import { enableScreens } from "react-native-screens";
import AppLoading from "expo-app-loading";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import ShopNavigator from "./app/navigation/ShopNavigator";
import ProductReducer from "./app/store/reducers/products";
// import * as cartReducer from "./app/store/reducers/cart";
import cartReducer from "./app/store/reducers/cart";
import ProductsOverviewScreen from "./app/screens/shop/ProductsOverviewScreen";
import ordersReducer from "./app/store/reducers/orders";

enableScreens();

const rootReducer = combineReducers({
  products: ProductReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

const store = createStore(rootReducer);

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
