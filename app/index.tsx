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
import Toast from "react-native-toast-message";
import { Icons } from "@/components";

// TODO: display toast message
// TODO: regroup login and register in a single component
const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLogin, setIsLogin] = useState(true);

  const router = useRouter();

  const handleValidation = () => {
    if (email === "" || password === "") {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Error",
        text2: "Please fill all the fields",
        visibilityTime: 3000,
        autoHide: true,
      });
    }

    isLogin ? auth.login(email, password) : auth.register(email, password);
  };

  const image = {
    uri: "https://clement-jny.fr/static/images/myBooks/authBackgroundImage.png",
  };

  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
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

        <Pressable onPress={handleValidation} style={styles.button}>
          <Text style={styles.text}>{isLogin ? "Login" : "Register"}</Text>
          <Icons.Ionicons name="log-in-outline" size={20} color="white" />
        </Pressable>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontFamily: "Quicksand" }}>
            {isLogin ? "Don't have an account ?" : "Already have an account ?"}
          </Text>
          <Button
            title={isLogin ? "Register" : "Login"}
            color={colors.light.primary}
            onPress={() => setIsLogin(!isLogin)}
          />
        </View>
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
    // width: 76,
    // height: 20,
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
    flexDirection: "row",
    gap: 10,
  },
});

export default Index;
