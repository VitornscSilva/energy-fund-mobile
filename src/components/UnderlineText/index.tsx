import React from 'react';

import {Text} from './styles';

interface UnderlineTextrops {
  children: string;
}

export function UnderlineText({children}: UnderlineTextrops) {
  return <Text>{children}</Text>;
}
