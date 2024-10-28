import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import {
  useFonts,
  PTSansCaption_400Regular,
} from "@expo-google-fonts/pt-sans-caption"; // title
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand"; // body

SplashScreen.preventAutoHideAsync();

export default function App() {
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
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text style={{ fontFamily: "PtSansCaption", fontSize: 20 }}>
        Fonts : pt-sans-caption 400 regular
      </Text>
      <Text style={{ fontFamily: "Quicksand", fontSize: 20 }}>
        Fonts : quicksand 400 regular
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
