
import { useState } from 'react';
import { StyleSheet,ScrollView, Text,Image, View,TouchableOpacity,Dimensions } from 'react-native';
const {width,height}=Dimensions.get('window');
import {users} from './users.json';
import UserReturn from './userReturn';

export default function HomeScreen({navigation}){

  const [user,setUser] =useState("");
 

    return(
      <ScrollView>
      <View style={styles.container}>
      <TouchableOpacity style={styles.touch} onPress={
      ()=>{
        console.log("Edit");
      }}>
        <Text style={{color:'white', fontSize:20}}> Edit Profile</Text>
      </TouchableOpacity>
        <Text style={{
        color:'gray',
        fontWeight:'bold', 
        fontSize:20 ,
        textAlign:'center',
        marginTop:10
        }}>Who is watching ?
        </Text>
        <View style={{padding:10, justifyContent:'space-around' }}>
          <UserReturn data={users}/>
        </View>
   
    </View>
    </ScrollView>
    )
  }

const styles=StyleSheet.create({
container:{
  backgroundColor:'#1D283E',
  height,

 
},
touch:{
  marginTop:40,
  flexDirection:'row-reverse',
  padding:10
},
profile:{ 
   width:150 ,
   height:150,
   borderRadius:100,
   marginTop:20,
   borderColor:'white',
   borderWidth:2,
},
photo:{
width:"100%",
backgroundColor:"#1D283E",
height:"90%",
  },
})