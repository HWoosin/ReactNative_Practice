import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Header = () => {
    return (
      <View style={[styles.container,styles.header]}>
        <Text style={styles.text}> Header </Text>
      </View>
    )
}

export const Contents = () => {
    return (
      <View style={[styles.container,styles.contents]}>
        <Text style={styles.text}> Contents </Text>
      </View>
    )
}

export const Footer = () => {
    return (
      <View style={[styles.container,styles.footer]}>
        <Text style={styles.text}> Footer </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        height:80
    },
    header:{//flex는 비율
        // flex:1, //flex지정 안하면 height에 맞춤
        backgroundColor:'#fce300'
    },
    contents:{
        flex:1,
        backgroundColor:'#ff0077',
        height:540 
    },
    footer:{
        // flex:1,
        backgroundColor:'#00ff00'
    },
    text:{
        fontSize:25
    }
});
