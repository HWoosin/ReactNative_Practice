import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

export default () => {
    return (
      <View style={styles.shadow}>
      </View>
    )
  
}

const styles = StyleSheet.create({
  shadow:{
    backgroundColor:'#fff',
    width:200,
    height:200,
    ...Platform.select({//Platform의 역할:ios, 안드로이드 스타일코드 달라서 각기 명확히 적용하기 위함
        ios:{
            shadowColor:'#000',
            shadowOffset:{
                width:10,
                height:10
            },
            shadowOpacity:0.5,
            shadowRadius:10,
        },
        android:{
            elevation:20
        }
    })
  }
})
