import { useLinkProps } from '@react-navigation/native'
import React, { Component, useState,useEffect } from 'react'
import { SafeAreaView, View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native'
import Post from '../../component/post/postList'
import PostSource from '../../component/post/postSource'
import filter from 'lodash.filter';


const PostList = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filterdData, setfilterdData] = useState(PostSource);
    const [masterData, setMasterData] = useState(PostSource);
    const [liked, setLiked] = useState(false);

    const changeLike = () =>{
        if(liked == false)
        {
            setLiked(true);
        }
        else
        {
            setLiked(false);
        }
    }



    const handleSearch = text=>{
        if(text){
                const newData = PostSource.filter((item) => {
                const itemData = (item.content || item.nickName)? item.content:''
                const textData = text;
                return itemData.indexOf(textData) > -1;
            });
            setfilterdData (newData);
            setSearchInput(text);
        
        }
        else{
            setfilterdData(masterData)
            setSearchInput(text);
        }
    }

    useEffect(()=>{
        fetch
    },[]);

    return (
        <SafeAreaView style={styles.container}>
            <Text style = {styles.top}>Top</Text>
            <Text style={styles.title}>Forum</Text>

            <View style = {styles.inputField}>
                <TextInput value={searchInput} onChangeText={(val) => handleSearch(val)}
                    placeholder={'Enter input here'} placeholderTextColor='#000' style={styles.input}
                    >

                </TextInput>
            </View>


            <View style = {styles.postField}>
                <FlatList 
                data = {filterdData}

                renderItem ={(obj) => {
                    return(
                        <Post
                            nickName = {obj.item.nickName}
                            content = {obj.item.content}
                        />
                    );
                }}
                keyExtractor={item => item.id.toString()}
                />
                
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
        marginBottom: 30,
    },
    postField:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        marginLeft:15,
    },
})