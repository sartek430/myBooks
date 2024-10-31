import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { colors } from "@/utils";
import { AuthContext } from "@/contexts";
import { auth } from "@/services";
import { db } from "@/services";

type UserProps = {
  lastname: string;
  firstname: string;
};

const Account = () => {
  const { userId } = AuthContext.useAuth();

  const [myUser, setMyUser] = useState<UserProps | undefined>(undefined);

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
        <View style={styles.userInfo}>
          <Text style={styles.welcomeMessage}>
            Welcome, {myUser.firstname} {myUser.lastname}
          </Text>
          {/* <Text style={styles.userDetails}>First Name: {myUser.firstname}</Text> */}
          {/* <Text style={styles.userDetails}>Last Name: {myUser.lastname}</Text> */}
        </View>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.light.text,
    fontFamily: "Quicksand",
  },

  //   container: {
  //     flex: 1,
  //     paddingTop: 50,
  //     backgroundColor: "#fff",
  //   },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  userInfo: {
    paddingHorizontal: 20,
  },
  welcomeMessage: {
    fontSize: 18,
    marginBottom: 10,
  },
  userDetails: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Account;
