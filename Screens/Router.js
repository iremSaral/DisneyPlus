
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import DownloadScreen from './DownloadScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchScreen';
import WatchMovieScreen from "./WatchMovieScreen";

const Stack=createNativeStackNavigator();
const Bottom=createMaterialBottomTabNavigator();

export default function App() {

  function MovieStack(){
    return(
    <Stack.Navigator>
    <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
    <Stack.Screen name='WatchMovieScreen' component={WatchMovieScreen} options={{headerShown:false}}/>   
    </Stack.Navigator> 
    )
  }

  return (  
    <NavigationContainer  screenOptions={{}}>
    <Bottom.Navigator barStyle={{backgroundColor:"#1D283E", height:Dimensions.get('window').height/12}} > 
      <Bottom.Screen
        name="Home"
        component={MovieStack}
        options={{title: 'Home', tabBarIcon: () => (
            <FontAwesome name="home" size={24} color="gray" /> ), 
          }} />
       <Bottom.Screen 
       name='Search' 
       component={SearchScreen} 
       options={{ tabBarIcon: () => (
        <FontAwesome name="search" size={24} color="gray" />
      ),}}
       />
        <Bottom.Screen 
       name='Download' 
       component={DownloadScreen
    } 
       options={{ tabBarIcon: () => (
        <AntDesign name="download" size={24} color="gray" />
      ),}}
       />
      <Bottom.Screen 
      name="Profile" 
      component={ProfileScreen}
      options={{ tabBarIcon: () => (
        <Ionicons name="person" size={24} color="gray" />
      ),}} 
      />
     
    </Bottom.Navigator>
  </NavigationContainer>

  );
}

