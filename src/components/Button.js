import React from "react";
import { Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";

export default (props) => {
  const stylesButton = [styles.button];
  if (props.double) stylesButton.push(styles.buttonDouble);
  if (props.triple) stylesButton.push(styles.buttonTriple);
  if (props.operation) stylesButton.push(styles.operationButton);
  if (props.equal) stylesButton.push(styles.equalButton);

  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    padding: 20,
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#888",
  },
  operationButton: {
    color: "white",
    backgroundColor: "#fa8231",
  },
  equalButton: {
    color: "white",
    backgroundColor: "#31a9fa",
  },
  buttonDouble: {
    width: (Dimensions.get("window").width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get("window").width / 4) * 3,
  },
});
