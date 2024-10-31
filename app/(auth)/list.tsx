import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, RefreshControl } from "react-native";
import { colors } from "@/utils";
import { BookCard } from "@/components";
import { Modal } from "@/components";
import { DocumentData } from "firebase/firestore";
import { db } from "@/services";
import { AuthContext } from "@/contexts";

const BookList = () => {
  const { userId } = AuthContext.useAuth();

  const [myBooks, setMyBooks] = useState<(DocumentData | undefined)[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedBookId, setSelectedBook] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const loadBooks = async () => {
    setMyBooks([]);

    try {
      const userBooksId = await db.userBooks.getAll(userId);
      const bookPromises = userBooksId.map((id: string) => db.book.get(id));
      const books = await Promise.all(bookPromises);
      setMyBooks(books);
    } catch (error) {
      console.error("Failed to load books:", error);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    // todo: message
    await loadBooks();
    setRefreshing(false);
  };

  const onPress = (id: string) => {
    setSelectedBook(id);
    setModalVisible(true);
  };
  const handleModalClose = () => {
    setSelectedBook("");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Book List</Text>
      {myBooks.length === 0 ? (
        <Text style={styles.noBooks}>You have no books</Text>
      ) : (
        <FlatList
          data={myBooks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <BookCard
              key={item.title}
              title={item.title}
              author={item.author}
              date={item.date}
              stars={item.stars}
              isbn={item.isbn}
              isInBookList={true}
              onPress={() => onPress(item.id)}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}

      <Modal
        isVisible={isModalVisible}
        setIsVisible={setModalVisible}
        selectedBookId={selectedBookId}
        onClose={handleModalClose}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: colors.light.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.light.text,
    fontFamily: "Quicksand",
  },

  noBooks: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});

export default BookList;
