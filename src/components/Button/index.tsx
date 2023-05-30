import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';

import {ButtonText, Container} from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

export function Button({children, ...rest}: ButtonProps) {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
}
