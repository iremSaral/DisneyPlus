import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Dimensions } from 'react-native';
import movies from '../assets/data/data.json';
import Feather from 'react-native-vector-icons/Feather';
import SearchFilter from './components/searchFilter';

const { width, height } = Dimensions.get("window");

export default function SearcScreen() {

  const [query, setQuery] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.searcView}>
        <Feather name='search' size={20} />
        <TextInput placeholder='Search'
          value={query}
          onChangeText={(text) => { setQuery(text) }} />
      </View>
      <Text style={styles.kesfet}>Keşfet</Text>

      <SearchFilter data={movies.movies} input={query} setInput={setQuery} />

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: width,
    padding: 3,
    backgroundColor: "#1D283E",
    flex: 1
  },
  kesfet: {
    textAlign: "left",
    fontSize: 15,
    color: "gray",
    fontWeight: "bold",
  },
  textInput: {
    height: 40,
    width: width / 1.1,
    backgroundColor: 'white',

  },
  searcView: {
    padding: 10,
    flexDirection: 'row',
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 0,
    height: '8%',
    marginTop: 40
  },

})