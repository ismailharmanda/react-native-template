import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const ComponentsScreen = ({ navigation }) => {
  const greeting = "Hi there!";
  return (
    <View>
      <Text style={styles.textStyle}>This is the components HomeScreen</Text>
      <Text style={styles.textStyle}>{greeting}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Go to HomeScreen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "red",
  },
});

export default ComponentsScreen;
