import { StyleSheet, Text, View } from "react-native";
import BookResultCard from "../components/cards/BookResultCard";
import { light } from "../utils/colors";

const Page = () => {
  return (
    <View style={styles.container}>
      <BookResultCard
        image={require("../assets/Seigneur des Anneaux livre.jpeg")}
        author="J.R.R.Tolkien"
        title="The lord of the rings"
        stars={3}
        date="1954"
      />
    </View>
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
