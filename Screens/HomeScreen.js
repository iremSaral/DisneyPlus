
import { StyleSheet, Image,ScrollView,TouchableOpacity, View,Text,Button ,SafeAreaView, Dimensions, ImageBackground} from 'react-native';
import CardMovie from "./components/CardMovie";
import PosterMovie from "./components/PosterMovie";

export default function HomeScreen({navigation}){
//cardMovie
const logo=require("../assets/images/DisneyPlus.png"); 
const view1=require("../assets/images/slider.png");
const disney=require("../assets/images/disney.png");
const geographic=require("../assets/images/geographic.png");
const marvel=require("../assets/images/marvel.png");
const pixar=require("../assets/images/pixar.png");

//PosterMovie
const soul=require("../assets/images/poster8.png");
const loki=require("../assets/images/poster1.png");
const mulan=require("../assets/images/poster2.png");
const falcon=require("../assets/images/poster3.png");
const avengers=require("../assets/images/poster4.png");
const thor=require("../assets/images/poster5.png");
const salazars=require("../assets/images/poster7.png");
const raya=require("../assets/images/poster9.png");
const luca=require("../assets/images/poster10.png");
const ford=require("../assets/images/poster11.png");
const dark=require("../assets/images/poster12.png");

//Video
const marvelVideo =require("../assets/images/slider3.png")
const muchmore=require("../assets/images/muchmore.jpg")

return(
  <ScrollView>
<SafeAreaView style={styles.SafeArea}>
<View style={styles.viewLogo}>
<Image source={logo} style={styles.image}/>
</View>
<View style={styles.view1}>
  <TouchableOpacity>
  <Image style={styles.poster1} source={view1} onPress={()=>{console.log("poster")}}/>
  </TouchableOpacity>
</View>
<ScrollView horizontal={true}>
<View style={styles.view2}>
<CardMovie name={disney}/>
<CardMovie name={geographic}/>
<CardMovie name={marvel}/>
<CardMovie name={pixar}/>
<CardMovie name={logo}/>
</View>
</ScrollView>
<Text style={{color:"white"}}>Disney+'ta yeni</Text>
<View style={styles.viewNewVideo}>
 <PosterMovie name={thor}/>
 <PosterMovie name={loki}/>
 <PosterMovie name={mulan}/>
</View>
<Text style={{color:"white"}}>Daha Fazla Eğlence</Text>

<View style={styles.lastView}>
<Image style={styles.lastView} source={muchmore}/>
</View>
<Text style={{color:"white"}}>İzlemeye Devam Et</Text>
<View style={styles.VideoView} >
<TouchableOpacity onPress={()=>{
  navigation.navigate("WatchMovieScreen")
}}>
<Image style={styles.lastView}  source={marvelVideo} />
<Text style={{color:"white"}}> MarvelStudio</Text>
<Text style={{color:"gray"}}> .... kaldı</Text>
</TouchableOpacity>
</View>
<Text style={{color:"white"}}>Disney Channel Favorileri</Text>
<View style={styles.viewNewVideo}>
 <PosterMovie name={thor}/>
 <PosterMovie name={loki}/>
 <PosterMovie name={mulan}/>
</View>
</SafeAreaView>
</ScrollView>
    )

}

const styles = StyleSheet.create({
  poster1:{
    height:184,
    width:370,
  },
 VideoView:{
  height:Dimensions.get('window').height/2.9,
  backgroundColor:"black"
 },
  SafeArea:{
    alignItems:"center",
    backgroundColor:"black",
    width:Dimensions.get('window').width,
 
  },
  view1:{
    height:Dimensions.get('window').height/4,
    width:370,
    borderColor:"black",
    backgroundColor:"gray"
  },
  viewLogo:{
    height:Dimensions.get('window').height/12,
    width:Dimensions.get('window').width-2,
    backgroundColor:"black",
    alignItems:"center"
  },
  view2:{
    height:Dimensions.get('window').height/8,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",    
  },

  viewNewVideo:{
    height:Dimensions.get('window').height/5,
    width:370,
   flexDirection:"row",
   justifyContent:"space-between"
  
   
  },
  lastView:{
    width:370,
    height:Dimensions.get('window').height/3.5,
    backgroundColor:"green"
  },
  image:{
    width:60,
    height:60,
  }
  });