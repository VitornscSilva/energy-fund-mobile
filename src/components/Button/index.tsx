import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';

import {ButtonText, Container} from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  type?: 'default' | 'green' | 'white';
}

export function Button({children, type = 'default', ...rest}: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <ButtonText type={type}>{children}</ButtonText>
    </Container>
  );
}
