import React, {memo, useCallback} from 'react';
import {Text, View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {BottomTabBarProps, BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

import defaultStyles from './styles';

export interface BottomTabItemProps extends Partial<BottomTabBarProps> {
  options: BottomTabNavigationOptions;
  route: RouteProp<ParamListBase>;
  isFocused: boolean;
}

const BottomTabItem = ({options, route, navigation, isFocused}: BottomTabItemProps) => {
  const composeStyles = defaultStyles({isFocused, tabBarStyle: {}});

  const label =
    options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

  const onPress = useCallback(() => {
    const event = navigation!.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes sure that the params inside the tab screen are preserved
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      navigation.navigate({name: route.name, merge: true});
    }
  }, [navigation, route.key, route.name, isFocused]);

  const onLongPress = useCallback(() => {
    navigation!.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  }, [navigation, route.key]);

  return (
    <TouchableRipple
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      borderless
      centered
      onPress={onPress}
      onLongPress={onLongPress}
      style={composeStyles.touchableButton}
    >
      <View style={composeStyles.touchableContainer}>
        {options.tabBarIcon &&
          options.tabBarIcon({focused: isFocused, size: 24, color: composeStyles.label.color as string})}
        <Text style={composeStyles.label}>{label as string}</Text>
      </View>
    </TouchableRipple>
  );
};

export default memo(BottomTabItem);
