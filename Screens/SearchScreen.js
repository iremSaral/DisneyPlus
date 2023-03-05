
import { StyleSheet, Text, View,Button } from 'react-native';

export default function HomeScreen({navigation}){
    return(
<View>
<Text> This is the Home page</Text>
  <Button
  title="Go to Jane's profile"
  onPress={() =>
    navigation.navigate('Profile', {name: 'Jane'})
  }
/></View>
    )

} 