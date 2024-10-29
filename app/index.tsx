import React, {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from "react-native";
import { AuthContext } from "@/context";
import { auth } from "@/services";
import { StatusBar } from "expo-status-bar";
// import { Button, Input, Icons } from "@/components";
import { colors } from "@/utils";
import { Redirect, useRouter, useSegments } from "expo-router";
// import Login from "./(auth)/login";
// import { useEffect } from "react";

const Page = () => {
  //   const router = useRouter();
  //   const segments = useSegments();

  const { user, isLoading } = AuthContext.useAuth();

  //   useEffect(() => {
  //     const inAuthGroup = segments[0] === "(auth)";

  //     if (user && !inAuthGroup) {
  //       router.replace("/");
  //     } else if (!user && inAuthGroup) {
  //       router.replace("/login");
  //     }
  //   }, [user, isLoading]);

  console.log("user : ", user);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.light.accent} />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {user ? (
          <>
            <Text>Welcome, {user.email}</Text>
            <Button title="Logout" onPress={auth.logout} />
          </>
        ) : (
          <>
            {!isLoading && <Redirect href={"/login"} />}
            {/* <Login /> */}
          </>
        )}
      </View>

      {/* <Button></Button> */}
      {/* <Input placeholder="aaa" /> */}
      {/* <Icons.AntDesign name="HTML" /> */}
      {/* <Icons.EvilIcons name="search" size={24} color="#1F2937" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // ou toute autre couleur de fond
  },
});

export default Page;
