import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Login} from '../pages/Login';

import AuthRoutes from './tab.routes';
import colors from '../styles/colors';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}>
    <stackRoutes.Screen name="Home" component={AuthRoutes} />
    <stackRoutes.Screen name="Login" component={Login} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
