// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Counter from './components/Counter';

const App = () => {
  return <SafeAreaView style={styles.full} />;
};

const styles = StyleSheet.create({
  full: {
    flex: 1, // 자신이 현재 차지하고있는 영역을 전체 차지하겠다는 의미이다.
    //backgroundColor: 'cyan',
  },
});

export default App;
