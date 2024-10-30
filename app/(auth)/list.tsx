import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "@/utils";

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
    backgroundColor: colors.light.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.light.text,
    fontFamily: "Quicksand",
  },
});

export default BookList;
