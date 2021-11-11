import React, { Component, useState,useEffect } from 'react'
import { SafeAreaView, View, Text, StyleSheet, FlatList, DeviceEventEmitter, Image, TextInput } from 'react-native'

const PostList = () => {
    const [searchInput, setSearchInput] = useState('');
    const[feed,setFeed] = ([])

    useEffect(()=>{
        fetch
    },[]);
    return (
        <SafeAreaView style={styles.container}>
            <Text style = {styles.top}>Top</Text>
            <Text style={styles.title}>Forum</Text>

            <View style = {styles.inputField}>
                <TextInput value={searchInput} onChangeText={(val) => setSearchInput(val)}
                    placeholder={'Enter input here'} placeholderTextColor='#000' style={styles.input}>

                </TextInput>
            </View>


            <View style = {styles.postField}>

            </View>
        </SafeAreaView>
    )
}

export default PostList;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
    },
    top:{
        backgroundColor:'#000',
        height:30,

    },
    title: {
        fontSize: 32,
        margintop: 40,
        marginLeft: 15,
        fontWeight: 'bold',
    },
    input: {
        width: '92%',
        height: 39,
        borderWidth:1,
        paddingLeft:10,

        
    },
    inputField:{
        display:'flex',
        alignItems:'center',
    },
    postField:{
        width:'92%',
        position:'relative',
        top:50,
    },
})