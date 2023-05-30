import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import colors from '../../styles/colors';
import fontSizes from '../../styles/fontSizes';

interface ButtonProps {
  type: 'default' | 'green' | 'white';
}

const ButtonOptions = {
  default: {
    background: colors.purple,
    color: colors.white,
  },
  green: {
    background: colors.green,
    color: colors.white,
  },
  white: {
    background: colors.white,
    color: colors.purple,
  },
};

export const Container = styled(RectButton)<ButtonProps>`
  width: 100%;
  height: 60px;
  background: ${(props: ButtonProps) => ButtonOptions[props.type].background};
  border-radius: 10px;
  margin-top: 8px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-size: ${fontSizes.md};
  font-weight: 400;
  line-height: 26px;
  color: ${(props: ButtonProps) => ButtonOptions[props.type].color};
`;
