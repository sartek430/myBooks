import { Tabs } from "expo-router";
import { Icons } from "@/components";
import { colors } from "@/utils";

const AuthLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.light.secondary,
        tabBarInactiveTintColor: colors.light.background,
        // headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.light.primary,
          //   paddingBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="search"
        options={{
          title: "BookSearch",
          tabBarIcon: ({ color }) => (
            <Icons.Ionicons size={28} name="search" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: "BookList",
          tabBarIcon: ({ color }) => (
            <Icons.Ionicons size={28} name="list" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => (
            <Icons.Ionicons size={28} name="happy-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default AuthLayout;
