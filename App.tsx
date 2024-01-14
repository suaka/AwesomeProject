/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
//import Greeting from './components/Greeting';
import Box from './components/Box';

const App = () => {
  //const name = 'JSX';
  return (
    <SafeAreaView>
      <Box rounded={true} size="large" color="blue" />
    </SafeAreaView>
  );
};
export default App;
