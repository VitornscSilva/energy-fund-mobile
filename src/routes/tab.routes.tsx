import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '../pages/Home';
import {Trade} from '../pages/Trade';
import {Portfolio} from '../pages/Portfolio';
import colors from '../styles/colors';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.purple,
      }}
      sceneContainerStyle={{
        paddingVertical: Platform.OS === 'ios' ? 25 : 0,
        height: 95,
      }}>
      <AppTab.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />

      <AppTab.Screen
        name="Trade"
        component={Trade}
        options={{headerShown: false}}
      />

      <AppTab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{headerShown: false}}
      />
    </AppTab.Navigator>
  );
};

export default AuthRoutes;
