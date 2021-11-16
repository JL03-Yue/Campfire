import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PostList from './screens/home-post';
import WelcomeScreen from './screens/welcome/index'
import NewPostScreen from './screens/new-post/index'
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import { NavigationContainer } from '@react-navigation/native';

//const Tab = createMaterialBottomTabNavigator();
/*
class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Tab.Navigator initialRouteName = "Post">
          <Tab.screen name = "Post" component = {PostScreen}/>

        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
export default App
*/
export default function App() {
  return (
    <View style={styles.container}>
      
      <NewPostScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
