import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

function Post(props){
    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.titleContainer}>
                <Text style = {styles.nickName}>{props.nickName}</Text>
            </View>
            <View style = {styles.contentContainer}>
                <Text style = {styles.postContent}>{props.content}</Text>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'90%',
        borderWidth:1,
        marginVertical:3,
    },
    titleContainer:{
        paddingVertical:10,
        paddingLeft:5,
    },
    nickName:{
        fontWeight:'800',
    },
    contentContainer:{
       paddingLeft: 5,
        paddingBottom:5,
    }
})

export default Post