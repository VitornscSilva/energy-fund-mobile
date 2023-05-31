import React, {useMemo} from 'react';
import {Image} from 'react-native';
import {LineChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';

import {
  Container,
  TopContainer,
  TopContent,
  TopContentColoredText,
  TopContentText,
} from './styles';
import colors from '../../../../styles/colors';
import {Fund} from '../../../../types/fund';

const UpIcon = require('../../../../assets/up.png');
const DownIcon = require('../../../../assets/down.png');

interface TopInfoProps {
  fund: Fund;
}

export function TopInfo({fund}: TopInfoProps): JSX.Element {
  const ArrowIcon = useMemo(() => {
    if (!fund?.isPositive) {
      return DownIcon;
    }
    return UpIcon;
  }, [fund]);

  const color = useMemo(() => {
    if (!fund?.isPositive) {
      return colors.red;
    }
    return colors.green;
  }, [fund]);

  return (
    <Container>
      <TopContainer>
        <TopContent>
          <TopContentText>{fund?.currentPrice ?? 0}</TopContentText>
          <TopContentText>2023</TopContentText>
        </TopContent>
        <TopContentColoredText isPositive={fund?.isPositive}>
          <Image source={ArrowIcon} /> {fund?.increasement}% ($1.21)
        </TopContentColoredText>
      </TopContainer>
      <LineChart
        style={{flex: 1, width: '100%', height: 120}}
        data={fund?.chartData}
        svg={{
          stroke: color,
          strokeWidth: 1.5,
        }}
        contentInset={{top: 5, bottom: 15}}
        curve={shape.curveNatural}
      />
    </Container>
  );
}
