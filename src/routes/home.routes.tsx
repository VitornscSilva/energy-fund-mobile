import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../pages/Home';
import {AssetDetails} from '../pages/AssetDetails';

import colors from '../styles/colors';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Divider} from '../components/Divider';

const homeRoutes = createStackNavigator();

function GoBackIcon() {
  const navigation = useNavigation();
  return (
    <View style={{paddingLeft: 20, flex: 0.45}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/arrow-left.png')} />
      </TouchableOpacity>
    </View>
  );
}

function CustomHeader() {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          alignItems: 'center',
          paddingBottom: 10,
          width: '100%',
        }}>
        <GoBackIcon />
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 17, fontWeight: '600'}}>Wind Fund</Text>
          <Text style={{fontSize: 14, fontWeight: '400', color: '#808080'}}>
            WFND
          </Text>
        </View>
      </View>
      <Divider />
    </>
  );
}

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
