import React from 'react';
import styled from 'styled-components/native';

const StyledInput = styled.TextInput.attrs(props => ({
  placeholder: '텍스트를 쓰시오...',
  placeholderTextColor: props.borderColor,//요소에서 준 속성을 attrs를 통해 스타일드 컴포넌트 안에 작성 가능
}))`
  width: 200px;
  height: 60px;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
  border: 2px;
  border-color: ${props => props.borderColor};
  font-size: 24px;
`;

const Input = props => {
  return <StyledInput borderColor={props.borderColor} />;
//   <Input placeholder = "텍스트를 쓰시오..." placeholderTextColor="#3498db"/>
};

export default Input;