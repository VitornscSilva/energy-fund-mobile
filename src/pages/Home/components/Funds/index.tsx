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

export function Funds() {
  const data = [20, 180, 100, 140, 35, 25, 45, 30, 60];
  const upData = [20, 180, 100, 140, 35, 25, 45, 30, 60];
  const downData = data.reverse();

  const navigation = useNavigation();

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
        <FundCardContainer onPress={() => navigation.navigate('AssetDetails')}>
          <Image source={WindIcon} />
          <FundCardText type="title">Wind Fund</FundCardText>
          <LineChart
            style={{flex: 1, width: '80%'}}
            data={upData}
            svg={{stroke: colors.green, strokeWidth: 2}}
            contentInset={{top: 5, bottom: 15}}
            curve={shape.curveNatural}
          />
          <View style={{flexDirection: 'row', gap: 5}}>
            <FundCardText>$1032.23</FundCardText>
            <FundCardText color={colors.green}>
              <Image source={UpIcon} /> 3.51%
            </FundCardText>
          </View>
        </FundCardContainer>
        <FundCardContainer>
          <Image source={SolarIcon} />
          <FundCardText type="title">Solar Fund</FundCardText>
          <LineChart
            style={{flex: 1, width: '80%'}}
            data={downData}
            svg={{stroke: colors.red, strokeWidth: 2}}
            contentInset={{top: 5, bottom: 15}}
            curve={shape.curveNatural}
          />
          <View style={{flexDirection: 'row', gap: 5}}>
            <FundCardText>$986.61</FundCardText>
            <FundCardText color={colors.red}>
              <Image source={DownIcon} /> 0.13%
            </FundCardText>
          </View>
        </FundCardContainer>
        <FundCardContainer>
          <Image source={NaturalIcon} />
          <FundCardText type="title">Natural Fund</FundCardText>
          <LineChart
            style={{flex: 1, width: '80%'}}
            data={downData}
            svg={{stroke: colors.green, strokeWidth: 2}}
            contentInset={{top: 5, bottom: 15}}
            curve={shape.curveNatural}
          />
          <View style={{flexDirection: 'row', gap: 5}}>
            <FundCardText>$1122.95</FundCardText>
            <FundCardText color={colors.green}>
              <Image source={UpIcon} /> 5%
            </FundCardText>
          </View>
        </FundCardContainer>
      </ScrollView>
    </Container>
  );
}
