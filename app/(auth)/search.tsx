import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { colors } from "@/utils";
import AntDesign from "@expo/vector-icons/AntDesign";

const BookSearch = () => {
  const [inputValue, setInputValue] = useState("");

  const searchBook = (inputValue: string) => {
    console.log("searching book");
  };

  return (
    <View style={styles.container}>
      <View>
        <AntDesign
          style={styles.searchIcon}
          name="search1"
          size={24}
          color="black"
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a book"
          value={inputValue}
          onChangeText={setInputValue}
          onSubmitEditing={() => searchBook(inputValue)}
          returnKeyType="done"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: colors.light.background,
    alignItems: "center",
  },
  searchInput: {
    borderWidth: 2,
    borderColor: colors.light.secondary,
    borderRadius: 1000,
    width: 300,
    height: 40,
    paddingLeft: 20,
    fontFamily: "PtSansCaption",
  },
  searchIcon: {
    position: "absolute",
    top: 8,
    right: 10,
  },
});

export default BookSearch;
