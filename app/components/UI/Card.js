// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// const Card = props => {
//   return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
// };

// const styles = StyleSheet.create({
//   card: {
//     shadowColor: 'black',
//     shadowOpacity: 0.26,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 8,
//     elevation: 5,
//     borderRadius: 10,
//     backgroundColor: 'white'
//   }
// });

// export default Card;
import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
<<<<<<< HEAD
    shadowColor: "black",
=======
    shadowColor: 'black',
>>>>>>> 6bf28ab3ca46800b6484c5d89dcdeeabfc0358a4
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
<<<<<<< HEAD
    backgroundColor: "white",
  },
=======
    backgroundColor: 'white'
  }
>>>>>>> 6bf28ab3ca46800b6484c5d89dcdeeabfc0358a4
});

export default Card;
