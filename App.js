import React, { Component } from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native';
import PostHome from './screens/home-post';
import WelcomeScreen from './screens/welcome/index'
import NewPostScreen from './screens/new-post/index'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation, CommonActions } from '@react-navigation/native';



const Stack = createStackNavigator();


export default function App() {
  


  return (

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Camp Post">

          <Stack.Screen name="Camp Post"
            component={PostHome}
            options={({navigation}) => ({
              headerTintColor: 'white',
              headerStyle: { backgroundColor: 'black' },
              headerRight: () => ( 
                <TouchableOpacity style = {styles.newPostButton} onPress={() =>navigation.navigate('NewPost')}>
                  <Text style = {styles.newPostButtonText}>✏️</Text>
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen name="NewPost" component={NewPostScreen} />

        </Stack.Navigator>
      </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  newPostButton:{
    marginRight:15,
    
  },
  newPostButtonText:{
    fontSize:30,
  },
});
