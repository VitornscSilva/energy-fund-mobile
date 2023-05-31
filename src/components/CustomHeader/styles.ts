import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';

export const GoBackContainer = styled.View`
  padding-left: 20px;
  flex: 0.45;
`;

export const Container = styled.View`
  flex-direction: row;
  margin-top: 40px;
  align-items: center;
  padding-bottom: 10px;
  width: 100%;
`;

export const TitleContainer = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${fontSizes.lg};
  font-weight: 600;
`;
export const Description = styled.Text`
  font-size: ${fontSizes.sm};
  font-weight: 400;
  color: ${colors.gray_dark};
`;
