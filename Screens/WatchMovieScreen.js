import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Image, Text,Button,Pressable, View, Dimensions } from 'react-native';
import {Video,Audio} from "expo-av";
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';


export default function App() {

const poster=require('../assets/images/poster5.png');
const add=require("../assets/images/add.png")

 // const video = require("./assets/videos/disney.mp4")
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <ScrollView>
         <SafeAreaView style={styles.Back}>
        <View style={styles.container}>
        <Video 
    ref={video}
    style={styles.video}
    source={require("../assets/videos/disney.mp4")}
    useNativeControls
    resizeMode="contain"
    isLooping
    volume={100}
    isMuted= {false}
    onPlaybackStatusUpdate={status => setStatus(() => status)}
    
   />
        <StatusBar style="auto" />
        </View>
        <View style={{flexDirection:"row", alignItems:"center"}}>
          <Pressable  style={styles.buttons}    onPress={() =>
     status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()} >
          <Entypo name='controller-play' size={25} color="black"/>
          <Text style={styles.text} >{status.isPlaying ? 'Pause' : 'Play'}</Text>
          </Pressable>
        </View>
        <View style={{backgroundColor:"black",flexDirection:"row",alignItems:"center"}}>
        <View style={{backgroundColor:"black",flexDirection:"column",alignItems:"center",padding:10}}>
          <FontAwesome size={25} name="plus" color="white"/>
          <Text style={{color:"gray"}}>Play List</Text>
        </View>
        <View style={{backgroundColor:"black",flexDirection:"column",alignItems:"center",padding:10}}>
          <FontAwesome size={25} name="group" color="white"/>
          <Text style={{color:"gray"}}>GroupWatch</Text>
        </View>
        <View style={{backgroundColor:"black",flexDirection:"column",alignItems:"center",padding:10}}>
          <FontAwesome size={25} name="download" color="white"/>
          <Text style={{color:"gray"}}>İndir</Text>
        </View>
        </View>
        <View>
          <Text style={{color:"white", fontSize:17,}}>Description Description Description DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription</Text>
        </View>
       </SafeAreaView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  video:{
    alignItems:"center",
    justifyContent:"center",
    width:Dimensions.get("window").width,
    height:Dimensions.get("window").height/2,
  },
  ıcon:{
    width:20,
    height:20,
  },
  container:{
    alignItems:"center",
    justifyContent:"center",
    width:Dimensions.get("window").width,
    height:Dimensions.get("window").height/2,
    position:"relative"
  },
  Back:{
    alignItems:"center",
    backgroundColor:"black",
    width:Dimensions.get("window").width,
    height:Dimensions.get("window").height*2,

  },
  buttons: {
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"white",
    color:"white",
    width:Dimensions.get("window").width-30,
    height:40,
    borderRadius:5
  },
  text:{
    color:"black",
    fontSize:20,
    fontWeight:"bold"
  },
  

});
