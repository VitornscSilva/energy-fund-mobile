import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Login} from '../pages/Login';
import {SignUp} from '../pages/SignUp';

import {AppRoutes} from './app.routes';
import colors from '../styles/colors';
import {Platform} from 'react-native';

const stackRoutes = createStackNavigator();

export function StackRoutes() {
  return (
    <stackRoutes.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          paddingVertical: Platform.OS === 'ios' ? 25 : 0,
          backgroundColor: colors.white,
        },
      }}>
      <stackRoutes.Screen name="Login" component={Login} />
      <stackRoutes.Screen name="SignUp" component={SignUp} />
      <stackRoutes.Screen name="App" component={AppRoutes} />
    </stackRoutes.Navigator>
  );
}
