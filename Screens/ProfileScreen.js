
import { StyleSheet,ScrollView, Text,Image, View,TouchableOpacity,Dimensions } from 'react-native';
import pp from '../assets/images/logo.png'
const {width,height}=Dimensions.get('window');
export default function HomeScreen({navigation}){
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
        <View style={{justifyContent:'space-between'}}>
        <TouchableOpacity style={{flex:1/2}}>
          <Image source={pp} style={styles.profile}/>
        </TouchableOpacity>
        <Text style={{color:'white',position:'absolute',marginTop:180,marginLeft:70}}>Me</Text>
       
        </View>
        <View>

        </View>
   
    </View>
    </ScrollView>
    )
  }

const styles=StyleSheet.create({
container:{
  backgroundColor:'#1D283E',
  width,
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
   borderWidth:2,},
})