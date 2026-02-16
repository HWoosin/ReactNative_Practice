import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'

const EventButton = () =>{

    const _onPressIn = () => {console.log("눌림!")};
    const _onPressOut = () => {console.log("떼짐!")};
    const _onPress = () => {console.log("그냥 누름!")};
    const _onLongPress = () => {console.log("길게누름!")};

    return (
        <TouchableOpacity style={{
            backgroundColor:'#0400ff',
            padding:15,
            width:200,
            margin:10,
            borderRadius:8, //모서리 둥글게
            alignItems: 'center', //가로정렬
            justifyContent: 'center', //세로정렬
        }}
        onPressIn={_onPressIn}
        onLongPress={_onLongPress}
        onPressOut={_onPressOut}
        onPress={_onPress}

        delayLongPress={3000}//3초
        >

            <Text style={{
                color:"#fff"
            }}>Press</Text>
            
        </TouchableOpacity>
    );
}

export default EventButton;