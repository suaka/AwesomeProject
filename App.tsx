/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import Greeting from './components/Greeting';

const App = () => {
  const name = 'JSX';

  return (
    <SafeAreaView>
      <Greeting name={name} />
    </SafeAreaView>
  );
};
export default App;
