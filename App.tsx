/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useState} from 'react';
import {Button, SafeAreaView} from 'react-native';
import Box from './components/Box';

const App = () => {
  const [visible, setVisible] = useState(true);
  // 버튼을 누르는 컴포넌트 사용
  const onPress = () => {
    setVisible(!visible);
  };
  return (
    <SafeAreaView>
      <Button title="토글" onPress={onPress} />
      <Box rounded={true} size="large" color="blue" />
    </SafeAreaView>
  );
};
export default App;
