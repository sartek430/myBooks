import { StyleSheet, Text, View } from "react-native";
import { light } from "../utils/colors";
import BookSearch from "../screens/BookSearch";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookList from "../screens/BookList";
import { Ionicons } from "@expo/vector-icons";
import Account from "../screens/Account";

const Page = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: "search" | "list" | "happy-outline" = "search";

          if (route.name === "BookSearch") {
            iconName = "search";
          } else if (route.name === "BookList") {
            iconName = "list";
          } else if (route.name === "Account") {
            iconName = "happy-outline";
          }

          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: light.secondary,
        tabBarInactiveTintColor: light.background,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: light.primary,
          paddingBottom: 5,
        },
      })}
    >
      <Tab.Screen name="BookSearch" component={BookSearch} />
      <Tab.Screen name="BookList" component={BookList} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: light.background,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Page;
