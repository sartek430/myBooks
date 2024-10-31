import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { colors } from "@/utils";
import { AuthContext } from "@/contexts";
import { db } from "@/services";
import LottieView from "lottie-react-native";

type UserProps = {
  lastname: string;
  firstname: string;
};

const Account = () => {
  const { userId } = AuthContext.useAuth();

  const [myUser, setMyUser] = useState<UserProps | undefined>(undefined);

  const confettiRef = useRef<LottieView>(null);

  const loadData = async () => {
    try {
      const data = await db.user.me(userId);
      setMyUser({ firstname: data.firstname, lastname: data.lastname });
    } catch (error) {
      console.error("Failed to load user data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      {myUser ? (
        <>
          <View style={styles.userInfo}>
            <Pressable
              style={styles.welcomeMessage}
              onPress={() => confettiRef.current?.play(0)}
            >
              <Text>
                Welcome, {myUser.firstname} {myUser.lastname}
              </Text>
            </Pressable>
          </View>

          <LottieView
            ref={confettiRef}
            source={require("../../assets/animation.json")}
            autoPlay={false}
            loop={false}
            style={styles.lottie}
            resizeMode="cover"
          />
        </>
      ) : (
        <Text>Loading user information...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: colors.light.background,
  },
  userInfo: {
    paddingHorizontal: 20,
  },
  welcomeMessage: {
    fontSize: 18,
    marginBottom: 10,
  },
  hiddenButton: {
    opacity: 100, // Make the button invisible
    position: "absolute",
    width: "100%",
    height: "100%",
    borderWidth: 1,
  },
  lottie: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    pointerEvents: "none",
  },
});

export default Account;
