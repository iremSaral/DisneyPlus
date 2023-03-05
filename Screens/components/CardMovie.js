import { StyleSheet, Text,Dimensions,Image, View,Button,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function cardMovie(props){
    
const navigation=useNavigation();
    return(
            <TouchableOpacity onPress={()=>{
               navigation.navigate("WatchMovieScreen")
            }}>
                <Image style={styles.cardMovie} source={props.name} />
            </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
      cardMovie:{
        width:60,
        height:60,
        borderRadius:10,
        borderColor:"gray",
        borderWidth:1,
        margin:10
      },
})
