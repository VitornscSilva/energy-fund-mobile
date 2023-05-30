/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';

import {Routes} from './src/routes';
import {StatusBar} from 'react-native';
import {store} from './src/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor="#6a51ae" />
      <Routes />
    </Provider>
  );
}

export default App;
