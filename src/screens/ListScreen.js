import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friend 1", age: 29 },
    { name: "friend 2", age: 30 },
    { name: "friend 3", age: 50 },
    { name: "friend 4", age: 10 },
    { name: "friend 5", age: 20 },
    { name: "friend 6", age: 45 },
    { name: "friend 7", age: 25 },
    { name: "friend 8", age: 35 },
  ];
  return (
    <>
      <FlatList
        showsVerticalScrollIndicator={false}
        horizontal={false}
        keyExtractor={(item) => item.name}
        data={friends}
        renderItem={({ item: { name, age }, index }) => (
          <Text style={styles.textStyle}> {`name: ${name}, age: ${age}`}</Text>
        )}
      />
      <Button title="button" />
    </>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
export default ListScreen;
