import { Tabs } from "expo-router";
import { Button, View } from "react-native";
import { Icons } from "@/components";
import { colors } from "@/utils";
import { auth } from "@/services";
import Toast from "react-native-toast-message";

const AuthLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.light.background,
        tabBarInactiveTintColor: colors.light.secondary,
        tabBarStyle: {
          backgroundColor: colors.light.primary,
        },
        headerStyle: {
          backgroundColor: colors.light.background,
        },
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: "bold",
          color: colors.light.text,
          fontFamily: "Quicksand",
        },
        headerTitleAlign: "left",
      }}
    >
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Icons.Ionicons size={28} name="search" color={color} />
          ),
          headerTitle: "Search for books",
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: "List",
          tabBarIcon: ({ color }) => (
            <Icons.Ionicons size={28} name="list" color={color} />
          ),
          headerTitle: "My books",
        }}
      />
      <Tabs.Screen
        name="comment"
        options={{
          title: "Comments",
          tabBarIcon: ({ color }) => (
            <Icons.Ionicons size={28} name="chatbox-outline" color={color} />
          ),
          headerTitle: "My Comments",
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <Icons.Ionicons size={28} name="happy-outline" color={color} />
          ),
          headerTitle: "My Account",
          headerRight: () => (
            <Icons.Ionicons
              size={28}
              name="log-out-outline"
              color={colors.light.primary}
              style={{ marginRight: 10 }}
              onPress={() => (
                auth.logout(),
                Toast.show({
                  type: "success",
                  text1: "Logged out",
                  position: "bottom",
                })
              )}
            />
          ),
          headerLeft: () => <View style={{ marginLeft: 10 }} />,
        }}
      />
    </Tabs>
  );
};

export default AuthLayout;
