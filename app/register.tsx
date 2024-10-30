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

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = () => {
    // () => auth.register(email, password);
    auth.register(email, password);
    // alert("Register");
    router.replace("/"); // Redirige vers la page d'accueil après l'inscription
  };

  const goToLogin = () => {
    router.replace("/");
  };

  const image = {
    uri: "https://clement-jny.fr/static/images/myBooks/authBackgroundImage.png",
  };

  return (
    <ImageBackground source={image} style={styles.image}>
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
            Already have an account ?
          </Text>
          <Button
            title="Login"
            color={colors.light.primary}
            onPress={goToLogin}
          />
        </View>

        <Pressable onPress={handleLogin} style={styles.button}>
          <Text style={styles.text}>Create my account !</Text>
        </Pressable>
      </View>
    </ImageBackground>
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
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  text: {
    color: "white",
    width: 142,
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

export default Register;
