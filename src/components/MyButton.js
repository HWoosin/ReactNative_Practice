import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

// const MyButton = () => {
//     return(
//         <TouchableOpacity style={
//             {
//                 backgroundColor:'#0400ff',
//                 padding:15,
//                 width:200,
//                 margin:10,
//                 borderRadius:8,
//                 alignItems: 'center',
//                 justifyContent: 'center',

//             }
//         }
//         onPress={()=> alert('TouchableOpacity로 버튼을 만들고 Mybutton컴포넌트를 작성함!')}
//         >
//             <Text style={
//                 {
//                     fontSize:24,
//                     color:'#d0ff00'
//                 }
//             }>Press
//             </Text>
//         </TouchableOpacity>
//     );
// };
const MyButton = (props) => {//props 활용
    const {title='defaultProps',children, onPress} = props;
    console.log(props);
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
        onPress={()=> props.onPress()}
        >
            <Text style={
                {
                    fontSize:24,
                    color:'#d0ff00'
                }
            }>{children || title}
            </Text>
        </TouchableOpacity>
    );
};

MyButton.defaultProps = { // 이제 defaultProps는 화살표 함수와 사용 불가, 함수에 매개변수로 지정해주어야함
    title:'defaultProps'
};
MyButton.propTypes = { //string, number, func 등, isRequired는 필수여부
  title: PropTypes.string,
  onPress: PropTypes.isRequired
};

export default MyButton;