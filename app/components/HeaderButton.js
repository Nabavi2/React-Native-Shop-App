import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
function CustomHeaderButton(props) {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={24}
      color={Colors.white}
    />
  );
}

export default CustomHeaderButton;
