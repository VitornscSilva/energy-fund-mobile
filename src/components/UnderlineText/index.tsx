import React from 'react';

import {Text} from './styles';

interface UnderlineTextrops {
  children: string;
  colorText?: 'dark' | 'light';
}

export function UnderlineText({
  children,
  colorText = 'light',
}: UnderlineTextrops) {
  return <Text colorText={colorText}>{children}</Text>;
}
