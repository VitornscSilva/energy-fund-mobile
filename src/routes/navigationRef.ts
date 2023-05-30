import {createNavigationContainerRef} from '@react-navigation/native';

type RootNavigationParams = {
  [key: string]: any;
};

export const navigationRef = createNavigationContainerRef();

export function navigate<RouteName extends keyof RootNavigationParams>(
  name: RouteName,
  params?: RootNavigationParams[RouteName],
) {
  navigationRef.current?.navigate(name, params);
}
