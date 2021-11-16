import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView,TouchableOpacity } from 'react-native';
import LikeButton from '../likeButton/index'

function Post(props){

    const [liked, setLiked] = useState(false);
    const[likedIcon, setLikedIcon] = useState('🖤');

    const handleLike = () =>{
        if(liked)
        {
            setLiked(false);
            setLikedIcon('🖤');
        }
        if(!liked)
        {
            setLiked(true);
            setLikedIcon('♥️')
        }
    }

    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.titleContainer}>
                <Text style = {styles.nickName}>{props.nickName}</Text>
            </View>
            <View style = {styles.contentContainer}>
                <Text style = {styles.postContent}>{props.content}</Text>
            </View>
            <View style = {styles.like}>
                <TouchableOpacity onPress = {handleLike}>
                {likedIcon}
                </TouchableOpacity>
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
    },
    like:{
        paddingLeft:5,
    }
})

export default Post