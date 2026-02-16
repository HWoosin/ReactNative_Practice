import React from 'react'
import {StyleSheet, Text, View } from 'react-native';
import MyButton from './src/components/MyButton';
import Counter from './src/components/Counter';
import EventButton from './src/components/EventButton';
import EventInput from './src/components/EventInput';

const App = () => {
  // const name='woosin'
  // return (
  //   <View style={styles.container}>
  //     <Text style={styles.text}>
  //     {(()=>{
  //       if(name === 'woosin') return 'Hello Woosin!';
  //       else return 'Hello World';
  //     })()}</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
  const name='woosin'
  return (
    /* <View style={{flex: 1,
    backgroundColor: '#d0ff00',
    alignItems: 'center',
    justifyContent: 'center',}}>
    */
    <View style={styles.container}>
      <Text style={styles.text}>
      {(()=>{
        if(name === 'woosin') return 'Hello Woosin!';
        else return 'Hello World';
      })()}</Text> 
    <MyButton onPress={()=> alert('defaultProps를 테스트함!')}/>
    <MyButton title='props Test' onPress={()=> alert('TouchableOpacity로 버튼을 만들고 Mybutton컴포넌트를 작성함!')}/>
    <MyButton onPress={()=> alert('children 매개를 테스트함!')}>This is Child Button</MyButton>
    <Counter/>
    <EventButton/>
    <EventInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:50,
    color: '#fff'
  }
});

export default App;


