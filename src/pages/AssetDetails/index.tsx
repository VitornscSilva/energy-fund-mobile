import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import colors from '../../styles/colors';
import {InfoStats} from './components/InfoStats';
import {YourPortfolio} from './components/YourPortfolio';

export function AssetDetails(): JSX.Element {
  return (
    <ScrollView>
      <View style={{paddingHorizontal: 20, paddingVertical: 26}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 4,
          }}>
          <Text style={{fontSize: 24, fontWeight: 600}}>$18.23</Text>
          <Text style={{fontSize: 24, fontWeight: 600}}>2023</Text>
        </View>
        <Text style={{color: colors.green}}>
          <Image source={require('../../assets/up.png')} /> 3.51% ($1.21)
        </Text>
      </View>

      <InfoStats />
      <YourPortfolio />
    </ScrollView>
  );
}
