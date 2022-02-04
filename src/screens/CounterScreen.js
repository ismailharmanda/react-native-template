import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "increment":
      return state + payload;
    case "decrement":
      return state - payload;

    default:
      state;
  }
};

const CounterScreen = () => {
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <View>
      <Button
        onPress={() => dispatch({ type: "increment", payload: 10 })}
        title="Increase"
      />
      <Button
        onPress={() => dispatch({ type: "decrement", payload: 10 })}
        title="Decrease"
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
