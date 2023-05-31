import {useRoute} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import {InfoStats} from './components/InfoStats';
import {TopInfo} from './components/TopInfo';
import {YourPortfolio} from './components/YourPortfolio';

export function AssetDetails(): JSX.Element {
  const route = useRoute();

  const {fund} = route.params;

  return (
    <ScrollView>
      <TopInfo fund={fund} />
      <InfoStats infoStats={fund?.infoStats} />
      <YourPortfolio
        portfolio={{...fund?.portfolio, isPositive: fund?.isPositive}}
      />
    </ScrollView>
  );
}
