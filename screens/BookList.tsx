import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { light } from "../utils/colors";

const BookList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Book List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: light.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: light.text,
    fontFamily: "Quicksand",
  },
});

export default BookList;
