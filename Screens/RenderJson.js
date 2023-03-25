
export const renderMovies=({item})=>{

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
