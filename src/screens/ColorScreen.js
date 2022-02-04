import React, { useState } from "react";
import { View, StyleSheet, Button, Text, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([randomHsl]);
  return (
    <View>
      <Button
        onPress={() => setColors((prev) => [...prev, randomHsl()])}
        title="Add a Color"
      ></Button>
      <FlatList
        style={{ display: "flex" }}
        keyExtractor={(item, i) => i}
        data={colors}
        renderItem={({ item }) => (
          <View
            style={{
              height: 100,
              width: 100,
              backgroundColor: item,
            }}
          />
        )}
      />
    </View>
  );
};

const randomHsl = () => {
  const hue = Math.round(Math.random() * 360);
  const saturation = Math.round(Math.random() * 100) + "%";
  const lightness = Math.round(Math.random() * 100) + "%";
  return `hsl(${hue},${saturation},${lightness})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
