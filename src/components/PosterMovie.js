import { StyleSheet, Text, Dimensions, Image, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function cardMovie(props) {

    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("WatchMovieScreen")
        }}>
            <Image style={styles.posterMovie} source={props.name} />
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    posterMovie: {
        height: 130,
        width: 100,
        borderRadius: 4
    },
})
