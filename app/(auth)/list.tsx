import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { colors } from "@/utils";
import JSONBookList from "@/models";
import { BookCard } from "@/components";
import { Modal } from "@/components";

const BookList = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const onPress = (book: React.SetStateAction<null>) => {
    setSelectedBook(book);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setSelectedBook(null);
  };

  const handleCommentSubmit = (comment: any) => {
    console.log(`Commentaire pour le livre ${selectedBook.title}: ${comment}`);
    setModalVisible(false);
    setSelectedBook(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Book List</Text>
      {JSONBookList.map((book) => (
        <BookCard
          key={book.title}
          title={book.title}
          author={book.author}
          date={book.date}
          stars={book.stars}
          image={book.image}
          isInBookList={true}
          onPress={() => onPress(book)}
        />
      ))}
      <Modal
        isVisible={isModalVisible}
        onClose={handleModalClose}
        onSubmit={handleCommentSubmit}
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
