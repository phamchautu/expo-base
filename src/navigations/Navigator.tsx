import React, { FC, PropsWithChildren, useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TouchableOpacity } from 'react-native';

import { ParamListBase, RouteProp } from '@react-navigation/native';
import { IconSize } from 'constants/contansts';
import ViIcon from '@components/ViIcon';
export interface NavigatorProps {
  initial?: string;
}

export const renderBackIcon = (navigation: any) => {
  const goBack = () => {
    navigation.pop();
  };
  return (
    <TouchableOpacity onPress={goBack} style={{ marginHorizontal: 20 }}>
      <ViIcon name="en-chevron-left" size={IconSize.lg} color="black" />
    </TouchableOpacity>
  );
};

export const defaultStackNavigationOptions = (props: {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
}) => {
  return {
    headerLeft: () => renderBackIcon(props.navigation),
  };
};

const Stack = createStackNavigator();

const Nav: FC<PropsWithChildren<NavigatorProps>> = (props) => {
  const { children, initial } = props;
  const inittialRouteName = useMemo(() => initial, [initial]);

  return (
    <Stack.Navigator
      initialRouteName={inittialRouteName}
      screenOptions={(props) => defaultStackNavigationOptions(props)}
    >
      {children}
    </Stack.Navigator>
  );
};

Nav.displayName = 'Navigator';

const Navigator = Object.assign(Nav, {
  Screen: Stack.Screen,
  Group: Stack.Group,
});

export default Navigator;
