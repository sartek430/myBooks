import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { colors } from "@/utils";
import { useState } from "react";
import { auth } from "@/services";

// TODO: display toast message
// TODO: regroup login and register in a single component
const Login = () => {
  const [email, setEmail] = useState("a@a.com");
  const [password, setPassword] = useState("azertyuiop");

  const router = useRouter();

  const handleLogin = () => {
    auth.login(email, password);
    // alert("Login");
    // login();
    router.replace("/"); // Redirige vers la page d'accueil après la connexion
  };

  const goToRegister = () => {
    router.replace("/register");
  };

  const image = {
    uri: "https://clement-jny.fr/static/images/myBooks/authBackgroundImage.png",
  };

  return (
    // <View style={styles.container}>
    <ImageBackground source={image} style={styles.image}>
      {/* <View> */}
      {/* <Text style={{ color: "white" }}>Login</Text> */}

      <View style={styles.container}>
        {/* <Text style={styles.text}>Inside</Text> */}
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor={colors.light.text}
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={colors.light.text}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "Quicksand" }}>
            Don't have an account ?{" "}
          </Text>
          <Button
            title="Sign up"
            color={colors.light.primary}
            onPress={goToRegister}
          />
        </View>

        <Pressable onPress={handleLogin} style={styles.button}>
          <Text style={styles.text}>Loging in !</Text>
        </Pressable>
        {/* <View className="flex flex-row px-4 py-5 space-x-4"></View> */}
      </View>
      {/* </View> */}
    </ImageBackground>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: colors.light.background,
    width: 368,
    height: 306,
    borderRadius: 10,
  },
  input: {
    width: 274,
    height: 49,
    // margin: 12,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: colors.light.primary,
    padding: 10,
    fontFamily: "Quicksand",
    color: colors.light.text,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  text: {
    color: "white",
    width: 76,
    height: 20,
    // fontWeight: "bold",
    fontFamily: "Quicksand",
  },
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
});

export default Login;
