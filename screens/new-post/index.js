import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, SafeAreaView, TouchableOpacity } from 'react-native';

function NewPost() {
    const [nickName, setnickName] = useState('');
    const [content, setContent] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <Text style = {styles.top}>Top</Text>

            <View style={styles.formContainer}>
                
                <View styles={styles.titleContainer}>
                    <Text styles={styles.title}>Create a New Post</Text>
                </View>
                <View style={styles.nickName}>
                    <TextInput
                        placeholder={'Your nickname...'}
                        placeholderTextColor='#000'
                        style={styles.nickNameInput}
                        value={nickName}
                        onChangeText={(val) => setnickName(val)}>
                    </TextInput>
                </View>

                <View style={styles.content}>
                    <TextInput
                        placeholder={'Your post...'}
                        placeholderTextColor='#000'
                        style={styles.contentInput}
                        value={nickName}
                        onChangeText={(val) => setnickName(val)}>
                    </TextInput>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.submitText} >Submit</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginVertical: 3,
    },
    top:{
        backgroundColor:'#000',
        height:30,

    },
    title: {
        fontSize: 20,
    },
    nickName: {
        marginVertical: 5,
        borderWidth: 1,
        paddingHorizontal:3,

    },
    nickNameInput: {
        minHeight: 40,

    },
    content: {
        borderWidth: 1,
        paddingHorizontal:3,
    },
    contentInput: {
        minHeight: 300,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        marginTop: 15,
    },
    submitText: {
        fontWeight: 'bold',
        fontSize: 20,
    }

})

export default NewPost