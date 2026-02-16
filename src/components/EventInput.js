import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'

const EventInput = () => {
    const [text ,setText] = useState('');
    // const _onChange = event => setText(event.nativeEvent.text);
    const _onChangeText = text => setText(text); // onChangeText를 통해 텍스트만 간편히 전달 가능
    return (
      <View>
        <Text style={{
            margin:10,
            fontSize:10,
            color:"#fff"
        }}> Text: {text} </Text>

        <TextInput style={{
            backgroundColor:"#fff",
            borderWidth:1,// 테두리
            padding:10, //안쪽 여백- 텍스트와 테두리사이의 거리
            fontSize:20,
            width:200,
            margin:10, //바깥 여백- 다른 컴포넌트와 거리
            color:"#000"
        }}
            placeholder="텍스트를 작성하세요."
            // onChange={_onChange}
            onChangeText={_onChangeText}
            />
      </View>
    );
   
}

export default EventInput;
