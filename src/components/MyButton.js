import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const MyButton = () => {
    return(
        <TouchableOpacity style={
            {
                backgroundColor:'#0400ff',
                padding:15,
                width:200,
                margin:10,
                borderRadius:8,
                alignItems: 'center',
                justifyContent: 'center',

            }
        }
        onPress={()=> alert('TouchableOpacity로 버튼을 만들고 Mybutton컴포넌트를 작성함!')}
        >
            <Text style={
                {
                    fontSize:24,
                    color:'#d0ff00'
                }
            }>Press
            </Text>
        </TouchableOpacity>
    );
};

export default MyButton;