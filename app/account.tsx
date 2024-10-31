import { StyleSheet, View, Text, Button } from "react-native";
import { colors } from "@/utils";
import { AuthContext } from "@/context";
import { auth } from "@/services";
import { db } from "@/services";
// import { FirestoreUser } from "../../models/User";

const Account = () => {
<<<<<<<< HEAD:app/account.tsx
  const { user, userId } = AuthContext.useAuth();

  console.log("account", userId);

  const loadData = async () => {
    const data = await db.user.me();
    console.log(data);
  };
  loadData();
========
  const { user } = AuthContext.useAuth();
>>>>>>>> a2ae2b9 (chore: move tabs files):app/(auth)/account.tsx

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account</Text>
      <Text>Welcome, {user?.email}</Text>
      <Button title="Logout" onPress={auth.logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.light.secondary,
    fontFamily: "Quicksand",
  },
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: colors.light.background,
  },
});

export default Account;
