import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { colors } from "@/utils";
import { book } from "../../services/db";
import { userBooks } from "../../services/db";
import { AuthContext } from "@/contexts";

interface BookCardProps {
  isbn: string;
  author: string;
  title: string;
  date: string;
  stars: number;
  isInBookList: boolean;
  onPress: () => void;
}

const BookCard: React.FC<BookCardProps> = ({
  isbn,
  author,
  title,
  date,
  stars,
  isInBookList,
  onPress,
}: BookCardProps) => {
  const { userId } = AuthContext.useAuth();
  const bookCardActionHandler = () => {
    if (!isInBookList) {
      addBook();
    } else {
      onPress();
    }
  };

  const addBook = async () => {
    const bookToAdd: BookDto = {
      title: title,
      author: author,
      date: date,
      stars: stars,
      isbn: isbn,
    };
    book.add(bookToAdd).then((bookId) => {
      bookId ? userBooks.add(bookId, userId) : console.log("Error adding book");
    });
  };

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 70, height: 100, marginLeft: 10 }}
        resizeMode="contain"
        source={
          isbn
            ? { uri: `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg` }
            : require("../../assets/default-book-cover.jpeg")
        }
      ></Image>
      <View style={styles.description}>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.title} ellipsizeMode="tail" numberOfLines={3}>
          {title.substring(0, 100)}
        </Text>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.stars}>
          {[...Array(stars)].map((e, i) => (
            <AntDesign
              key={i}
              name="star"
              size={24}
              color={colors.light.secondary}
            />
          ))}
        </View>
      </View>
      <Pressable style={styles.addBook} onPress={() => bookCardActionHandler()}>
        {isInBookList ? (
          <FontAwesome5
            name="comment-alt"
            size={24}
            color={colors.light.accent}
          />
        ) : (
          <AntDesign name="pluscircleo" size={24} color={colors.light.accent} />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    height: 150,
    width: 375,
    margin: 5,
    borderRadius: 10,
  },
  description: {
    marginLeft: 10,
    display: "flex",
    marginBottom: 10,
    flexDirection: "column",
    gap: 5,
  },
  author: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "PtSansCaption",
    color: colors.light.primary,
  },
  title: {
    fontSize: 12,
    width: 300,
    fontFamily: "Quicksand",
  },
  date: {
    fontSize: 16,
    fontFamily: "Quicksand",
  },
  stars: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  addBook: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default BookCard;
