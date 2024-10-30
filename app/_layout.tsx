import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import {
  useFonts,
  PTSansCaption_400Regular,
} from "@expo-google-fonts/pt-sans-caption"; // title
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand"; // body
import { Slot, Stack, Redirect, useRouter, useSegments } from "expo-router";
import { AuthContext } from "@/context";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { colors } from "@/utils";

SplashScreen.preventAutoHideAsync();

export default () => {
  const { AuthProvider } = AuthContext;

  return (
    <AuthProvider>
      <RootLayout />
    </AuthProvider>
  );
};

const RootLayout = () => {
  const { useAuth } = AuthContext;
  const { user, isLoading } = useAuth();

  const [loaded, error] = useFonts({
    PtSansCaption: PTSansCaption_400Regular,
    Quicksand: Quicksand_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  //   const router = useRouter();
  //   const segments = useSegments();

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

  //   if (!user) {
  //     return (
  //       //   <Stack>
  //       //     <Stack.Screen name="(auth)" options={{ headerShown: false }} />
  //       //   </Stack>
  //       //   {!isLoading && <Redirect href={"/login"} />}
  //       <Redirect href={"/login"} />
  //     );
  //   }

  //   if (user !== null) {
  //     return (
  //       <Stack>
  //         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  //       </Stack>
  //     );
  //   } else {
  //     return (
  //       //   <Stack>
  //       //     <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
  //       //   </Stack>
  //       <Slot />
  //       //   <Redirect href={"/login"} />
  //     );
  //   }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background,
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

// export default RootLayout;
