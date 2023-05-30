import styled from 'styled-components/native';

import fontSizes from '../../../../styles/fontSizes';
import colors from '../../../../styles/colors';
interface HeaderTextProps {
  type: 'default' | 'portfolio' | 'portfolioAmount';
  isColored?: boolean;
}

const TextOptions = {
  default: {
    fontSize: fontSizes.sm,
    fontWeight: 600,
    lineHeight: '18px',
  },
  portfolio: {
    fontWeight: 400,
    fontSize: fontSizes.xs,
    lineHeight: '15px',
  },
  portfolioAmount: {
    fontWeight: 600,
    fontSize: fontSizes['2xl'],
    lineHeight: '30px',
  },
};

export const HeaderContainer = styled.View`
  gap: 16px;
  width: 100%;

  padding: 30px;
`;

export const HeaderTopContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderAccountButton = styled.TouchableOpacity``;

export const HeaderText = styled.Text<HeaderTextProps>`
  ${({type = 'default', isColored}: HeaderTextProps) => `
   font-size: ${TextOptions[type]?.fontSize};
   font-weight: ${TextOptions[type]?.fontWeight};
   line-height: ${TextOptions[type]?.lineHeight};
   color: ${isColored ? colors.green : colors.text_dark};
  `};
`;

export const HeaderBottomContainer = styled.View`
  gap: 5px;
`;

export const PortfolioContent = styled.View`
  flex-direction: row;
  align-items: flex-end;
  gap: 2px;
`;

export const PortfolioContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const EarnRewardsButton = styled.TouchableOpacity`
  height: 30px;
  width: 128px;
  background: ${colors.purple_light};
  border-radius: 8px;
  gap: 5px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const EarnRewardsButtonText = styled.Text`
  font-weight: 600;
  font-size: 11px;
  line-height: 14px;
  color: #770fdf;
`;
