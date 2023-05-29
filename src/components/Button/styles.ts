import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: ${colors.purple};
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: ${fontSizes.md};
  font-weight: 400;
  line-height: 26px;
  color: ${colors.white};
`;
