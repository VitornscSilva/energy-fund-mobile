import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 30}px;
`;
