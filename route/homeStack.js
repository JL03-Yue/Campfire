import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PostHome from './screens/home-post';
import WelcomeScreen from './screens/welcome/index'
import NewPostScreen from './screens/new-post/index'
import { createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from "react-navigation"
import { NavigationContainer } from '@react-navigation/native';
import NewPost from './screens/new-post/index';

const Stack = createStackNavigator(screens);

const screens = {
    PostHome:{
      screen:PostHome
    },
    NewPostScreen:{
      screen:NewPostScreen
    }
}

export default createAppContainer(Stack);