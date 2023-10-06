import React, {memo} from 'react';
import {Surface} from 'react-native-paper';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import BottomTabItem from './BottomTabItem';
import defaultStyles from './styles';

const BottomTabBar = ({state, descriptors, navigation}: Partial<BottomTabBarProps>) => {
  const currentRoute = state!.routes[state!.index];
  const currentDescriptor = descriptors![currentRoute.key];
  const composeStyles = defaultStyles({isFocused: false, tabBarStyle: currentDescriptor.options.tabBarStyle});

  return (
    <Surface elevation={1} style={composeStyles.root}>
      {state!.routes.map(
        (route, index) =>
          descriptors![route.key]?.options.tabBarLabel &&
          descriptors![route.key]?.options.tabBarIcon && (
            <BottomTabItem
              key={route.key}
              options={descriptors![route.key]?.options}
              route={route}
              navigation={navigation}
              isFocused={state!.index === index}
            />
          )
      )}
    </Surface>
  );
};

export default memo(BottomTabBar);
