/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import Routes from './src/routes';
import {StatusBar} from 'react-native';

function App(): JSX.Element {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
      <Routes />
    </>
  );
}

export default App;
