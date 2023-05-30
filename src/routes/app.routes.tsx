import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '../pages/Home';
import {Trade} from '../pages/Trade';
import {Portfolio} from '../pages/Portfolio';
import colors from '../styles/colors';

const AppTab = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <AppTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.purple,
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
}
