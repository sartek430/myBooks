import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { light } from "../utils/colors";

const Account = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: light.secondary,
    fontFamily: "Quicksand",
  },
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: light.background,
  },
});

export default Account;
