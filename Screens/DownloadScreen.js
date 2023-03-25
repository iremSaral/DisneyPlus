import React, { Component } from 'react';
import { Text, View,Image,FlatList,StyleSheet,Dimensions } from 'react-native';
import { ScrollView ,TouchableHighlight} from 'react-native-gesture-handler';
import Searchbar from './components/SearchBar';
import movies from './data';

const {width,height}=Dimensions.get("window");
export default function AppendMode(){


renderMovies=({item})=>{
  return(
    <TouchableHighlight style={styles.card}>
      <View>
        <Image source={{uri: item.imageUrl}}/>
        <Text>{item.name}</Text>
      </View>
    </TouchableHighlight>
  )
}

  return(
  <View  style={styles.container}>
    <Searchbar/>
  </View>
  );
  

}

const styles=StyleSheet.create({
container:{
  alignItems:"center",
  width:width,
  padding:3,
  flex:1
},
card:{
  width:width/2,
  margin:"2%",
  height:height/3,
  elevation:12,
  backgroundColor:"#fff",
  borderBottomLeftRadius:0,
  borderBottomRightRadius:0,
  
  
},

})