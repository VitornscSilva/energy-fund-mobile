import styled from 'styled-components/native';
import {Platform} from 'react-native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${colors.white};
`;

export const BodyContainer = styled.View`
  width: 100%;
  padding: 20px 30px ${Platform.OS === 'android' ? 150 : 30}px;
`;
