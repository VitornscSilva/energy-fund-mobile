import styled from 'styled-components/native';
import {Platform} from 'react-native';
import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 30}px;
`;

export const Title = styled.Text`
  font-size: ${fontSizes['2xl']};
  color: ${colors.text_dark};
  margin: 64px 0 34px;
`;

export const CreateAccount = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const CreateAccountText = styled.Text`
  color: ${colors.text_light};
  font-size: ${fontSizes.xs};
`;
