import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StackRoutes} from './stack.routes';
import {navigationRef} from './navigationRef';

export function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackRoutes />
    </NavigationContainer>
  );
}
