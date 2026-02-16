import React, { useState } from 'react'
import { Text, View } from 'react-native'
import MyButton from './MyButton';

const Counter =() => {
    const [count, setCount] = useState(0); //초깃값 0전달, setCount는 함수
    const [double, setDouble] = useState(0); //초깃값 0전달, setDouble는 함수

    return( 
        <View style={{
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize:30,
                margin:10,
                color: '#fff'
            }}>{count}</Text>
             <Text style={{
                fontSize:30,
                margin:10,
                color: '#fff'
            }}>{double}</Text>
            <MyButton title="+" onPress={() => {setCount(count+1);setDouble(double+2);}}/>
            <MyButton title="-" onPress={() => {setCount(count-1);setDouble(double-2);}}/>{/*여러개의 useState를 사용가능*/}

        </View>
    
    );
       
    
}

export default Counter;
