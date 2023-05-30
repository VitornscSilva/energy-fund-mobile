import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';

export const Container = styled(RectButton)`
  width: 100%;
  height: 105px;
  background: ${colors.purple};
  border-radius: 10px;
  margin: 10px 0;
  padding: 20px 10px 20px 20px;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const CardTextContainer = styled.View`
  gap: 10px;
  width: 180px;
`;

export const CardTitle = styled.Text`
  font-size: ${fontSizes.md};
  font-weight: 600;
  line-height: 20px;
  color: ${colors.white};
`;

export const CardDescription = styled.Text`
  font-size: ${fontSizes.xs};
  font-weight: 400;
  line-height: 15px;
  color: ${colors.white};
`;
