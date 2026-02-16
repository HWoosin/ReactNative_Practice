import React, { useState } from 'react'
import {StyleSheet, Text, View, Switch } from 'react-native';
import MyButton from './src/components/MyButton';
import Counter from './src/components/Counter';
import EventButton from './src/components/EventButton';
import EventInput from './src/components/EventInput';
import { viewStyle } from './src/style';
import { Header,Contents,Footer } from './src/components/LayOut';
import ShadowBox from './src/components/ShadowBox';
import ButtonStyled from './src/components/ButtonStyled';
import styled, { ThemeProvider } from 'styled-components/native'; 
import Input from './src/components/Input';
import { basicTheme, darkTheme, lightTheme } from './src/theme';


const Container = styled.View`
  flex: 1;
  //background-color: #ff0000;
  background-color: ${props => props.theme.background};
  justify-content: center;
  align-items: center;

`;

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

  const [isDark, setIsDark] = useState(false);//useState로 테마 정하기
  const _toggleSwitch = () => setIsDark(!isDark);

  // return (
  //   /* <View style={{flex: 1,
  //   backgroundColor: '#d0ff00',
  //   alignItems: 'center',
  //   justifyContent: 'center',}}>
  //   */
  //  //외부 스타일 viewStyle 사용
  //   <View style={viewStyle.container}>
  //     {/* <Header/>
  //     <Contents/>
  //     <Footer/> */}
      
  //     {/* <Text style={viewStyle.text}>
  //     {(()=>{
  //       if(name === 'woosin') return 'Hello Woosin!';
  //       else return 'Hello World';
  //     })()}</Text> 
  //   <MyButton onPress={()=> alert('defaultProps를 테스트함!')}/>
  //   <MyButton title='props Test' onPress={()=> alert('TouchableOpacity로 버튼을 만들고 Mybutton컴포넌트를 작성함!')}/>
  //   <MyButton onPress={()=> alert('children 매개를 테스트함!')}>This is Child Button</MyButton>
  //   <Counter/>
  //   <EventButton/>
  //   <EventInput/> */}
  //   {/* <ShadowBox/> */}
    
  //   </View>
  // );
  return(
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}> 
      <Container>
        <Switch value={isDark} onValueChange={_toggleSwitch}/>
        {/* //스위치 통해 백그라운드 설정 */}
        <ButtonStyled title="woosin"/>
        <ButtonStyled title="Hanbit"/>
        <Input borderColor="#3498db"/>
        <Input borderColor="#ff00f2"/>
      </Container>
    </ThemeProvider>
  );
}

export default App;


