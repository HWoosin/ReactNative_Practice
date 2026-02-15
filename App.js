import React from 'react'
import {StyleSheet, Text, View } from 'react-native';
import MyButton from './src/components/MyButton';

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
    <MyButton />
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


