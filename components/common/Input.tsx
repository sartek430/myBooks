import { View, TextInput, TextInputProps, StyleSheet } from "react-native";
import React from "react";
import { colors } from "@/utils";

//? Input types
type TInputProps = TextInputProps & {};
const Input = ({ style, value, onChangeText, placeholder }: TInputProps) => {
  return (
    <TextInput
      style={[style, styles.input]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      //   placeholderTextColor={colors.light.text}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    margin: 12,
    width: 100,
    // height: 10,
    borderWidth: 1,
  },
});

export default Input;
