import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SvgUri from 'react-native-svg-uri';

import {Trade} from '../pages/Trade';
import {Portfolio} from '../pages/Portfolio';
import colors from '../styles/colors';
import {HomeRoutes} from './home.routes';

interface TabIconProps {
  size: number;
  color: string;
  icon: SVGElement;
}

const HomeIcon = require('../assets/svg/home-icon.svg');
const TradeIcon = require('../assets/svg/trade-icon.svg');
const PortfolioIcon = require('../assets/svg/portfolio-icon.svg');

const AppTab = createBottomTabNavigator();

function TabIcon({size, color, icon}: TabIconProps) {
  return (
    <View>
      <SvgUri width={size} height={size} fill={color} source={icon} />
    </View>
  );
}

export function AppRoutes() {
  return (
    <AppTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.purple,
        tabBarInactiveTintColor: colors.text_dark,
      }}>
      <AppTab.Screen
        name="HomeRoutes"
        component={HomeRoutes}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <TabIcon size={size} color={color} icon={HomeIcon} />
          ),
        }}
      />

      <AppTab.Screen
        name="Trade"
        component={Trade}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <TabIcon size={size} color={color} icon={TradeIcon} />
          ),
        }}
      />

      <AppTab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <TabIcon size={size} color={color} icon={PortfolioIcon} />
          ),
        }}
      />
    </AppTab.Navigator>
  );
}
