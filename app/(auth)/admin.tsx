import {
    View,
    Text,
    Button,
    ImageBackground,
    StyleSheet,
    TextInput,
    Pressable,
    Alert,
  } from "react-native";
  import { useRouter } from "expo-router";
  import { colors } from "@/utils";
  import { useState } from "react";
  import { adminAuth } from "@/services"; // Importez le service d'authentification admin
  
  const AdminLogin = () => {
    const [email, setEmail] = useState("admin@admin.com");
    const [password, setPassword] = useState("adminpassword");
  
    const router = useRouter();
  
    const handleAdminLogin = async () => {
      try {
        const adminUser = await adminAuth.loginAdmin(email, password);
        if (adminUser && adminUser.isAdmin) {
          router.replace("/admin/dashboard"); // Redirige vers le dashboard admin après connexion réussie
        } else {
          Alert.alert("Accès refusé", "Vous n'avez pas les droits administrateur.");
        }
      } catch (error) {
        Alert.alert("Erreur de connexion", "Vérifiez vos informations de connexion.");
      }
    };
  
    const goToRegister = () => {
      router.replace("/admin/register");
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
            placeholder="Admin Email"
            placeholderTextColor={colors.light.text}
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Admin Password"
            secureTextEntry={true}
            placeholderTextColor={colors.light.text}
          />
  
          <View style={styles.registerContainer}>
            <Text style={{ fontFamily: "Quicksand" }}>Don't have an admin account?</Text>
            <Button
              title="Sign up"
              color={colors.light.primary}
              onPress={goToRegister}
            />
          </View>
  
          <Pressable onPress={handleAdminLogin} style={styles.button}>
            <Text style={styles.text}>Log in as Admin</Text>
          </Pressable>
        </View>
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
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
      width: 150,
      textAlign: "center",
      fontFamily: "Quicksand",
    },
    button: {
      backgroundColor: colors.light.primary,
      borderRadius: 7,
      width: 274,
      height: 49,
      alignItems: "center",
      justifyContent: "center",
    },
    registerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
  
  export default AdminLogin;
  