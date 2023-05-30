import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Image, View} from 'react-native';
import {Container, FundCardContainer, FundCardText, Title} from './styles';
import colors from '../../../../styles/colors';

const WindIcon = require('../../../../assets/wind.png');
const SolarIcon = require('../../../../assets/solar.png');
const NaturalIcon = require('../../../../assets/natural-food.png');

const UpIcon = require('../../../../assets/up.png');
const DownIcon = require('../../../../assets/down.png');

export function Funds() {
  return (
    <Container>
      <Title>Funds</Title>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{width: '100%', height: 160, gap: 15}}>
        <FundCardContainer>
          <Image source={WindIcon} />
          <FundCardText type="title">Wind Fund</FundCardText>
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
