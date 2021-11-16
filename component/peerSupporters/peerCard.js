import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';


function PeerCard(props) {
    return (
        <SafeAreaView style={styles.container}>
            <View style = {styles.avatarContainer}>
                <Text style={styles.ava}>👤</Text>
            </View>
            <View style = {styles.nameContainer}>
                <Text style = {styles.name}>{props.name}</Text>
            </View>
            <View style = {styles.majorContainer}>
                <Text style = {styles.major}>{props.major}</Text>
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        width:150,
        height:210,
        borderWidth: 1,
        marginVertical: 3,
        marginHorizontal:3,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
    },
    avatarContainer:{
        
    },
    ava:{
        fontSize:100,

    },
    name:{
        fontSize:15,
        fontWeight:'700',
    },
    face:{},
    back:{},
})

export default PeerCard