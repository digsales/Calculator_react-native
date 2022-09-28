import React from "react";
import { Text, StyleSheet, Dimensions, TouchableHighlight } from "react-native";

export default (props) => {
  const stylesButton = [styles.button];
  if (props.double) stylesButton.push(styles.buttonDouble);
  if (props.triple) stylesButton.push(styles.buttonTriple);
  if (props.operation) stylesButton.push(styles.operationButton);
  if (props.equal) stylesButton.push(styles.equalButton);
  if (props.ac) stylesButton.push(styles.acButton);

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
    color: "white",
    backgroundColor: "rgba(0,0,0,0.8)",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.6)",
  },
  operationButton: {
    backgroundColor: "#4682B4",
  },
  equalButton: {
    backgroundColor: "#1E90FF",
  },
  acButton: {
    backgroundColor: "#FF4500",
  },
  buttonDouble: {
    width: (Dimensions.get("window").width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get("window").width / 4) * 3,
  },
});
