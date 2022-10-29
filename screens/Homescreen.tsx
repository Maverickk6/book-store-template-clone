import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Book from "../utils/utils";
import BookCard from "../components/BookCard";
const Homescreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState<Book | undefined | any>();

  useEffect(() => {
    fetch("https://fudap-books-api.herokuapp.com/books/")
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        setData(result);
      });
  });

  const getContent = () => {
    return <ActivityIndicator size="large" />;
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text className="my-4 text-lg text-center text-red-500">Homescreen</Text>
      <FlatList
        data={data}
        keyExtractor={(books, index) => {
          return books.id;
        }}
        renderItem={(booksData) => {
          return <BookCard />;
        }}
      />
    </View>
  );
};

export default Homescreen;
