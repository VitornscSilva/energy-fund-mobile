import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../pages/Home';
import {AssetDetails} from '../pages/AssetDetails';

import colors from '../styles/colors';
import {CustomHeader} from '../components/CustomHeader';

const homeRoutes = createStackNavigator();

export function HomeRoutes() {
  return (
    <homeRoutes.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <homeRoutes.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <homeRoutes.Screen
        name="AssetDetails"
        component={AssetDetails}
        options={{
          headerBackTitleVisible: false,
          header: () => <CustomHeader />,
        }}
      />
    </homeRoutes.Navigator>
  );
}
