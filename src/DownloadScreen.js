import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get("window");
export default function DownloadScreen() {
  return (
    <View style={styles.container}>
      <AntDesign name='download' size={60} color='gray' style={styles.ıcon} />
      <Text style={styles.title}>No downloaded content </Text>
      <Text style={styles.text}>The TV series and movies you have downloaded are displayed on this page.</Text>
    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: width,
    padding: 5,
    flex: 1,
    backgroundColor: '#1D283E'
  },
  ıcon: {
    marginTop: 200
  },
  title: {
    color: 'white',
    marginTop: 30,
    fontSize: 15,
    fontWeight: 'bold'
  },
  text: {
    color: 'gray',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20
  }
})