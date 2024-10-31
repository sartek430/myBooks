import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Text, FlatList } from "react-native";
import { colors } from "@/utils";
import AntDesign from "@expo/vector-icons/AntDesign";
import { BookModel } from "../../models/BookModel";
import { BookCard } from "@/components";

const BookSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const [books, setBooks] = useState<BookModel[]>();

  useEffect(() => {}, [books]);

  const searchBook = async (inputValue: string) => {
    try {
      const encodedQuery = encodeURIComponent(inputValue);
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodedQuery}`
      );
      const data = await response.json();
      const booksData: BookModel[] = data.docs.map((book: any): BookModel => {
        return {
          title: book.title,
          author: book.author_name ? book.author_name[0] : "Unknown author",
          date: book.first_publish_year,
          stars: book.ratings_average ? Math.round(book.ratings_average) : 0,
          isbn: book.isbn ? book.isbn[0] : "",
          isInBookList: false,
        };
      });
      setBooks(booksData);
    } catch (error) {
      console.error("Erreur lors de la recherche de livres:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <AntDesign
          style={styles.searchIcon}
          name="search1"
          size={24}
          color="black"
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a book"
          value={inputValue}
          onChangeText={setInputValue}
          onSubmitEditing={() => searchBook(inputValue)}
          returnKeyType="done"
        />
      </View>
      <FlatList
        data={books}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <BookCard
            isbn={item.isbn}
            author={item.author}
            title={item.title}
            date={item.date}
            stars={item.stars}
            isInBookList={item.isInBookList}
            onPress={() => {}}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: colors.light.background,
    alignItems: "center",
  },
  searchInput: {
    borderWidth: 2,
    borderColor: colors.light.secondary,
    borderRadius: 1000,
    width: 300,
    height: 40,
    paddingLeft: 20,
    fontFamily: "PtSansCaption",
  },
  searchIcon: {
    position: "absolute",
    top: 8,
    right: 10,
  },
});

export default BookSearch;
