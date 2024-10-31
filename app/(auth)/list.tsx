import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "@/utils";
import { BookCard } from "@/components";
import { Modal } from "@/components";
import { DocumentData } from "firebase/firestore";
import { db } from "@/services";

const booksIds = ["qPmXqEfvyy0fVhNW8jIu"];

const BookList = () => {
  const [myBooks, setMyBooks] = useState<(DocumentData | undefined)[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedBook, setSelectedBook] = useState("");

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const userBooks = await db.userBooks.getAll();
        const bookPromises = userBooks.map((userBook) =>
          db.book.get(userBook.id)
        );
        const books = await Promise.all(bookPromises);

        setMyBooks(books);

        booksIds.forEach(async (bookId) => {
          const book = await db.book.get(bookId);
          setMyBooks([...myBooks, book]);
        });
      } catch (error) {
        console.error("Failed to load books:", error);
      }
    };

    loadBooks();
  }, []);

  const onPress = (title: string) => {
    setSelectedBook(title);
    setModalVisible(true);
  };
  const handleModalClose = () => {
    setSelectedBook("");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Book List</Text>
      {myBooks.map(
        (book) =>
          book && (
            <BookCard
              key={book.title}
              title={book.title}
              author={book.author}
              date={book.date}
              stars={book.stars}
              isbn={book.isbn}
              isInBookList={true}
              onPress={() => onPress(book.title)}
            />
          )
      )}
      <Modal
        isVisible={isModalVisible}
        setIsVisible={setModalVisible}
        selectedBook={selectedBook}
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
});

export default BookList;
