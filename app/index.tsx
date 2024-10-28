import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Page = () => {
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Page;
