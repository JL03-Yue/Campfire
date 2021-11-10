import React,{Component} from 'react'
import {SafeAreaView,View, Text,StyleSheet,FlatList,useState,DeviceEventEmitter,Image} from 'react-native'
import CampfireImage from '../../assets/cartoon-campfire.jpeg'
import marshImage from '../../assets/marshmellow.png'

export default() => {
    return(
        <SafeAreaView style = {styles.container}>
            <Text style = {styles.title}>Campfire</Text>
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFA725',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%',
    },
    title:{
        fontFamily: 'monospace',
        fontSize:55,
        fontWeight:'bold',
        //position:'relative',
        //top:-110,
        color:'#785942'
    },
    icon:{

        width:300,
        height:150,
    },
  });