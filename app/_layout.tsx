import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import {
  useFonts,
  PTSansCaption_400Regular,
} from "@expo-google-fonts/pt-sans-caption"; // title
import { Quicksand_400Regular } from "@expo-google-fonts/quicksand"; // body
import { Slot } from "expo-router";

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

  return <Slot />;
};

export default RootLayout;
