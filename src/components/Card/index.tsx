import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';
import {Image, ImageSourcePropType} from 'react-native';

import {
  CardDescription,
  CardTextContainer,
  CardTitle,
  Container,
} from './styles';

interface ButtonProps extends RectButtonProperties {
  title: string;
  description: string;
  image: ImageSourcePropType;
}

export function Card({title, description, image, ...rest}: ButtonProps) {
  return (
    <Container {...rest}>
      <CardTextContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardTextContainer>

      <Image source={image} />
    </Container>
  );
}
