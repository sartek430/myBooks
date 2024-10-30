import { Pressable, PressableProps, StyleSheet, Text } from "react-native";
// import { colors } from "@/utils";
import { colors } from "@/utils";

//? Button types
// Define the properties to exclude
// type ExcludedButtonProps = "title"; // | "onPress" // Add any other props you want to exclude
type TButtonProps = PressableProps & {
  //Omit<PressableProps, ExcludedButtonProps> & {
  //   children?: React.ReactNode;
};

// Define the properties to include
// type IncludedButtonProps = 'disabled' | 'style'; // Add any other props you want to include

// // Define the new type by picking the included properties
// export type TButtonProps = Pick<ButtonProps, IncludedButtonProps> & {
//   children?: React.ReactNode;
// };

const Button = ({ children, onPress, ...props }: TButtonProps) => {
  //? Render
  return (
    // <Pressable onPress={onPress} style={[styles.base]} {...props}>
    //   {children}
    // </Pressable>

    <Pressable style={{ borderColor: colors.light.primary }}></Pressable>
  );
};

// export const LoginBtn = () => {
//   return (
//     <Button>
//       <Text>Login</Text>
//     </Button>
//   );
// };

// export const SubmitModalBtn = () => {
//   return (
//     <Button>
//       <Text>Submit</Text>
//     </Button>
//   );
// };

const styles = StyleSheet.create({
  base: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 7,
    width: 274,
    height: 49,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});

{
  /* <Pressable onPress={handleLogin} style={styles.button}>
  <Text style={styles.text}>Loging in !</Text>
</Pressable>;


  button: {
    backgroundColor: colors.light.primary,
    // padding: 10,
    borderRadius: 7,
    width: 274,
    height: 49,
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },

    text: {
    color: "white",
    width: 76,
    height: 20,
    // fontWeight: "bold",
    fontFamily: "Quicksand",
  }, */
}

export default Button;
