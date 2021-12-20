import React, { useState } from "react";
import * as Font from "expo-font";

import { enableScreens } from "react-native-screens";
import AppLoading from "expo-app-loading";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ProductReducer from "./app/store/reducers/products";
// import * as cartReducer from "./app/store/reducers/cart";
import ReduxThunk from "redux-thunk";
import cartReducer from "./app/store/reducers/cart";
import ProductsOverviewScreen from "./app/screens/shop/ProductsOverviewScreen";
import authReducer from "./app/store/reducers/auth";
import ordersReducer from "./app/store/reducers/orders";
<<<<<<< HEAD
import AppNavigator from "./app/navigation/AppNavigator";
=======
import NavigationContainer from "./app/navigation/NavigationContainer";
>>>>>>> 6bf28ab3ca46800b6484c5d89dcdeeabfc0358a4

enableScreens();

const rootReducer = combineReducers({
  products: ProductReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

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
      <AppNavigator />
    </Provider>
  );
}
