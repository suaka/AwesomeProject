import React from 'react';
import {View, Text} from 'react-native';

function Greeting(props) {
  return (
    <>
      <View>
        <Text>안녕하세요{props.name}!</Text>
      </View>
      <Text>안녕하세요_빈태그이용{props.name}!</Text>
    </>
  );
}

Greeting.defaultProps = {
  name: '리액트 네이티브',
};

export default Greeting;
