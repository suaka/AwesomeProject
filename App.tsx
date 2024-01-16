import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Counter from './components/Counter';

const App = () => {
  const [count, setCount] = useState(0);

  const minus = () => setCount(count - 1);
  const plus = () => setCount(count + 2);
  //const minus = () => setCount(count - 1);

  return (
    <SafeAreaView style={styles.full}>
      <Counter count={count} onIncrease={plus} onDecrease={minus} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1, // 자신이 현재 차지하고있는 영역을 전체 차지하겠다는 의미이다.
    //backgroundColor: 'cyan',
  },
});

export default App;
