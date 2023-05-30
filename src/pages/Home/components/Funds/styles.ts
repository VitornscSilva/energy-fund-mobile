import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import fontSizes from '../../../../styles/fontSizes';
import colors from '../../../../styles/colors';

interface FundCardTextProps {
  type: 'default' | 'title';
  color?: string;
}

const FundCardTextOptions = {
  default: {
    fontSize: fontSizes.sm,
    fontWeight: '400',
    lineHeight: '18px',
  },
  title: {
    fontWeight: '600',
    fontSize: fontSizes.xs,
    lineHeight: '15px',
  },
};

export const Container = styled(RectButton)`
  width: 100%;
  gap: 20px;
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: ${fontSizes.xl};
  line-height: 23px;
`;

export const FundCardContainer = styled.View`
  background: ${colors.white};
  border-color: ${colors.border_color};
  border-width: 1px;
  padding: 12px;
  width: 140px;
  height: 140px;

  gap: 7px;
`;

export const FundCardText = styled.Text`
  ${({type = 'default', color}: FundCardTextProps) => `
   font-size: ${FundCardTextOptions[type]?.fontSize};
   font-weight: ${FundCardTextOptions[type]?.fontWeight};
   line-height: ${FundCardTextOptions[type]?.lineHeight};
   color: ${color ?? colors.text_dark};
  `};
`;
