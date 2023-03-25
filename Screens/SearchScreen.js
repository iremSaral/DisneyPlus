import React, { useState } from 'react';
import { Text, View,Image,FlatList,TextInput,StyleSheet,Dimensions } from 'react-native';
import { ScrollView ,TouchableHighlight} from 'react-native-gesture-handler';
import {getImage} from './ReturnImage';
import { SearchBar } from 'react-native-elements'
import movies from './data';
import { renderMovies } from './RenderJson';

const {width,height}=Dimensions.get("window");

export default function SearcScreen(){

  //RenderMovie
  renderMovies=({item})=>{

  console.log(item.image.toUpperCase())
   return(
    <TouchableHighlight style={styles.card}>
      <View>
        <Image source={getImage(item.image)} style={styles.photo}/>
        <Text>{item.name}</Text>
      </View>
    </TouchableHighlight>
  )
}



  return(
  <View  style={styles.container}>
    <TextInput style={styles.textInput}/>
    <Text style={styles.kesfet}>Keşfet</Text>
    <FlatList
    vertical
    numColumns={2}
    showsVerticalScrollIndicator={false}
    data={movies.movies}
    renderItem={this.renderMovies}
    keyExtractor={(item,index)=>index.toString()}
    />
  </View>
  );
  

}

const styles=StyleSheet.create({
container:{
  alignItems:"center",
  width:width,
  padding:3,
  backgroundColor:"#1D283E",
  flex:1
},
card:{
  color:"gray",
  width:width/2,
  margin:"2%",
  height:height/3,
  elevation:12,
  borderBottomLeftRadius:0,
  borderBottomRightRadius:0,
},
photo:{
width:"100%",
backgroundColor:"#1D283E",
height:"90%"
},
kesfet:{
textAlign:"left",
fontSize:15,
color:"gray",
fontWeight:"bold",
},
textInput:{
  height:40,
  width:width/1.1,
  backgroundColor:'white',
  marginTop:30,
},
})