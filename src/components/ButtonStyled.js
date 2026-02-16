import React from 'react'
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'; 

const ButtonContainer = styled.TouchableOpacity`

    //background-color: ${props => props.title ==="woosin" ? '#3498db': '#dbd034'}; 
    //background-color: #ff0000; 
    background-color: ${props => props.title ==="woosin" ? props.theme.blue : props.theme.purple}; 
    border-radius: 15px;
    padding:15px 40px;
    margin:10px 0px;
    justify-content:center;
    
`;
//스타일드 컴포넌트는 props를 백틱안에서 접근가능함
const Title = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.theme.text};
`;

const ButtonStyled = (props) =>{
    // const {title,styles} = props;
    return(
        <ButtonContainer title={props.title}>
            <Title>{props.title}</Title>
        </ButtonContainer>
        // <TouchableOpacity style={[styles.container,
        //     {backgroundColor: props.title ==="woosin" ? '#3498db': '#dbd034'}]
        // }>
        //     <Text style={styles.title}>{props.title}</Text>
        // </TouchableOpacity>
    );
};

export default ButtonStyled;