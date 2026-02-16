import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyButton from './MyButton';

const Counter =() => {
    const [count, setCount] = useState(0); //초깃값 0전달, setCount는 함수
    const [double, setDouble] = useState(0); //초깃값 0전달, setDouble는 함수

    return( 
        <View style={{
            alignItems: 'center'
        }}>
            <Text style={style.text}>{count}</Text>
             <Text style={[style.text,style.textDouble]}>{double}</Text>
            <MyButton title="+" onPress={() => {setCount(count+1);setDouble(double+2);}}/>
            <MyButton title="-" onPress={() => {setCount(count-1);setDouble(double-2);}}/>{/*여러개의 useState를 사용가능*/}

        </View>
    
    );
       
    
}

const style = StyleSheet.create( //클래스 스타일링 - 여러개 적용가능. 앞의 스타일 먼저적용되고 덮어씌워짐.
    {
        text:{
            fontSize:30,
            margin:10,
            color: '#fff'
        },
        textDouble:{
            color: '#ff0000'
        }
    }
)

export default Counter;
