import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import pp from '../assets/profileImage/olaf.jpg'
const { width, height } = Dimensions.get("window");
const userList = ({ data }) => {

    return (
        <View >
            <FlatList
                vertical
                numColumns={2}
                data={data}
                renderItem={({ item }) => {
                    return (
                        <View style={{ padding: 20, alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Image source={pp} style={styles.profile} />
                            </TouchableOpacity>
                            <Text style={{ color: 'white', textAlign: 'center', padding: 5 }}>{item.name}</Text>
                        </View>

                    )

                }
                }
            />
        </View>
    )
}

export default userList;

const styles = StyleSheet.create({
    profile: {
        width: 140,
        height: 140,
        borderRadius: 100,
        marginTop: 20,
        borderColor: 'white',
        borderWidth: 0,

    },

})

