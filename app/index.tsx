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

import BookSearch from "../screens/BookSearch";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BookList from "../screens/BookList";
import { Ionicons } from "@expo/vector-icons";
import Account from "../screens/Account";

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

  const Tab = createBottomTabNavigator();
  return (
    {/* <Button></Button> */}
    {/* <Input placeholder="aaa" /> */}
    {/* <Icons.AntDesign name="HTML" /> */}
    {/* <Icons.EvilIcons name="search" size={24} color="#1F2937" /> */}


    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {user ? (
          <>
            <Text>Welcome, {user.email}</Text>
            <Button title="Logout" onPress={auth.logout} />
            
            
            <Tab.Navigator screenOptions={({ route }) => ({tabBarIcon: ({ color }) => {
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
                tabBarActiveTintColor: colors.light.secondary,
                tabBarInactiveTintColor: colors.light.background,
                headerShown: false,
                tabBarStyle: {
                  backgroundColor: colors.light.primary,
                  paddingBottom: 5,
                },
              })}
            >
              <Tab.Screen name="BookSearch" component={BookSearch} />
              <Tab.Screen name="BookList" component={BookList} />
              <Tab.Screen name="Account" component={Account} />
            </Tab.Navigator>
          </>
        ) : (
          <>
            {!isLoading && <Redirect href={"/login"} />}
            {/* <Login /> */}
          </>
        )}
      </View>
    </View>
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

export default Page;
