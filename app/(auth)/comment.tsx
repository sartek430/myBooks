import { FlatList, StyleSheet, Text, View, RefreshControl } from "react-native";
import { db } from "@/services";
import { useEffect, useState } from "react";
import { AuthContext } from "@/contexts";
import { colors } from "@/utils";

type CommentProps = {
  message: string;
  creationDate: string;
  bookTitle: string;
};

const Comment = () => {
  const { userId } = AuthContext.useAuth();
  const [myComments, setMyComments] = useState<CommentProps[] | undefined>();
  const [refreshing, setRefreshing] = useState(false);

  const loadComments = async () => {
    setMyComments([]);

    try {
      const comments = await db.comment.getAll(userId);
      // console.log("comments", comments);

      comments.forEach(async (comment) => {
        console.log(comment);

        const date = new Date(
          comment.creationDate.seconds * 1000 +
            comment.creationDate.nanoseconds / 1e6
        );

        // Formater la date et l'heure
        const options: Intl.DateTimeFormatOptions = {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        };
        const formattedDate = date.toLocaleString("fr-FR", options);

        const bookId = comment.bookId;

        const book = await db.book.get(bookId);

        setMyComments((oldComments) => [
          ...(oldComments || []),
          {
            message: comment.message,
            creationDate: formattedDate,
            bookTitle: book.title,
          },
        ]);
      });
    } catch (error) {
      console.error("Error loading comments", error);
    }
  };

  useEffect(() => {
    loadComments();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    // todo : message
    await loadComments();
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      {myComments?.length === 0 ? (
        <Text style={styles.noComments}>You have no comments</Text>
      ) : (
        <FlatList
          data={myComments}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.description}>
                <Text style={styles.book}>{item.bookTitle}</Text>
                <Text
                  style={styles.message}
                  ellipsizeMode="tail"
                  numberOfLines={3}
                >
                  {item.message}
                </Text>
                <Text style={styles.date}>{item.creationDate}</Text>
              </View>
            </View>
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.light.text,
    fontFamily: "Quicksand",
  },
  noComments: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },

  card: {
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
  book: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "PtSansCaption",
    color: colors.light.primary,
  },
  message: {
    fontSize: 18,
    width: 300,
    fontFamily: "Quicksand",
  },
  date: {
    fontSize: 16,
    fontFamily: "Quicksand",
  },
});

export default Comment;
