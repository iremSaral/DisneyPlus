import { Text, StyleSheet, FlatList, View, Dimensions, TouchableHighlight, Image } from "react-native";
import React from "react";
import { getImage } from '../ReturnImage';

const { width, height } = Dimensions.get("window");

const SearchFilter = ({ data, input, setInput }) => {
    return (
        <View>
            <FlatList
                vertical
                numColumns={2}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={({ item }) => {

                    if (input === "") {
                        return (
                            <TouchableHighlight style={styles.card}>
                                <View>
                                    <Image source={getImage(item.image)} style={styles.photo} />
                                    <Text style={{ color: 'white' }}>{item.name}</Text>
                                </View>
                            </TouchableHighlight>
                        )
                    }
                    if (item.name.toUpperCase().includes(input.toUpperCase())) {
                        return (
                            <TouchableHighlight style={styles.card}>
                                <View>
                                    <Image source={getImage(item.image)} style={styles.photo} />
                                    <Text style={{ color: 'white' }}>{item.name}</Text>
                                </View>
                            </TouchableHighlight>
                        )
                    }
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>

    )
}
export default SearchFilter;

const styles = StyleSheet.create({
    card: {
        color: "gray",
        width: width / 2,
        margin: "2%",
        height: height / 2.8,
        elevation: 12,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    photo: {
        width: "100%",
        backgroundColor: "#1D283E",
        height: "90%",
    },

})