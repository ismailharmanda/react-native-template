import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={styles.textStyle}>Child #3</Text>
      <Text style={styles.textStyle}>Child #1</Text>
      <Text style={styles.textStyle}>Child #2</Text>
      <Text style={{ ...styles.textStyle, flex: 1 }}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderStyle: "dashed",
    borderColor: "red",
    flexDirection: "row",
    height: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    borderWidth: 3,
    height: 100,
  },
});
export default BoxScreen;
