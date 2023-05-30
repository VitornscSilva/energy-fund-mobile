import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Image, View} from 'react-native';
import {LineChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import {useNavigation} from '@react-navigation/native';

import {Container, FundCardContainer, FundCardText, Title} from './styles';
import colors from '../../../../styles/colors';

const WindIcon = require('../../../../assets/wind.png');
const SolarIcon = require('../../../../assets/solar.png');
const NaturalIcon = require('../../../../assets/natural-food.png');

const UpIcon = require('../../../../assets/up.png');
const DownIcon = require('../../../../assets/down.png');
interface Fund {
  name?: string;
  abbr?: string;
  currentPrice?: string;
  increasement?: number;
  chartData?: number[];
  infoStats?: {
    aum?: string;
    issueData?: string;
    vintageRange?: string;
    ter?: string;
    priceAtClose?: string;
    priceAtOpen?: string;
  };
  portfolio?: {
    credits?: number;
    amount?: string;
    lastPurchase?: string;
    increasement?: number;
    retiredCredits?: number;
  };
  isPositive?: boolean;
}

interface FundsProps {
  funds: Fund[];
}

const FundsIcons = {
  'Wind Fund': WindIcon,
  'Solar Fund': SolarIcon,
  'Natural Fund': NaturalIcon,
};

export function Funds({funds}: FundsProps) {
  const navigation = useNavigation();

  const verifyColor = (fund: Fund) => {
    if (!fund?.isPositive) {
      return colors.red;
    }
    return colors.green;
  };

  const verifyArrowIcon = (fund: Fund) => {
    if (!fund?.isPositive) {
      return DownIcon;
    }
    return UpIcon;
  };

  return (
    <Container>
      <Title>Funds</Title>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{
          paddingRight: 20,
          paddingBottom: 20,
        }}
        contentContainerStyle={{
          gap: 15,
          paddingRight: 20,
        }}>
        {funds?.map(fund => (
          <FundCardContainer
            onPress={() => navigation.navigate('AssetDetails', {fund})}>
            <Image source={FundsIcons[fund?.name]} />
            <FundCardText type="title">{fund?.name}</FundCardText>
            <LineChart
              style={{flex: 1, width: '80%'}}
              data={fund?.chartData}
              svg={{
                stroke: verifyColor(fund),
                strokeWidth: 2,
              }}
              contentInset={{top: 5, bottom: 15}}
              curve={shape.curveNatural}
            />
            <View style={{flexDirection: 'row', gap: 5}}>
              <FundCardText>{fund?.currentPrice}</FundCardText>
              <FundCardText color={verifyColor(fund)}>
                <Image source={verifyArrowIcon(fund)} /> {fund?.increasement}%
              </FundCardText>
            </View>
          </FundCardContainer>
        ))}
      </ScrollView>
    </Container>
  );
}
