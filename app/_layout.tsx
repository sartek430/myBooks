import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import {
  useFonts,
  PTSansCaption_400Regular,
} from "@expo-google-fonts/pt-sans-caption"; // title
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand"; // body
import { Slot } from "expo-router";

import { TamaguiProvider } from "tamagui";
import { tamaguiConfig } from "../tamagui.config"; // your configuration

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
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
    // <TamaguiProvider config={tamaguiConfig}>
    <Slot />
    // </TamaguiProvider>
  );
};

export default RootLayout;
