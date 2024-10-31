import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import {
  useFonts,
  PTSansCaption_400Regular,
} from "@expo-google-fonts/pt-sans-caption"; // title
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand"; // body
import { Slot, useRouter, useSegments } from "expo-router";
import { AuthContext } from "@/contexts";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { colors } from "@/utils";
import Toast from "react-native-toast-message";

SplashScreen.preventAutoHideAsync();

export default () => {
  const { AuthProvider } = AuthContext;

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

  return (
    <AuthProvider>
      <RootLayout />
      <Toast />
    </AuthProvider>
  );
};

const RootLayout = () => {
  const { user, isLoading } = AuthContext.useAuth();

  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (user && !inAuthGroup) {
      router.replace("/(auth)/search");
    } else if (!user && inAuthGroup) {
      router.replace("/");
    }
  }, [user, isLoading]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.light.accent} />
        <Text>Loading...</Text>
      </View>
    );
  }

  return <Slot />;
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
