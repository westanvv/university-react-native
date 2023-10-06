import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export type BottomTabBarStyles = {
  root: ViewStyle;
  touchableButton: ViewStyle;
  touchableContainer: ViewStyle;
  label: TextStyle;
};

export default ({isFocused = false, tabBarStyle}: {isFocused?: boolean; tabBarStyle: any}): BottomTabBarStyles => {
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    root: StyleSheet.flatten([
      {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 56 + insets.bottom,
        paddingBottom: insets.bottom,
        paddingRight: insets.right,
        paddingLeft: insets.left,
      },
      tabBarStyle,
    ]),
    touchableButton: StyleSheet.flatten([
      {
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 3,
        borderTopColor: 'transparent',
      },
      isFocused && {
        borderTopColor: '#000',
      },
    ]),
    touchableContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: StyleSheet.flatten([
      {
        textAlign: 'center',
        fontSize: 12,
        color: '#000',
      },
      isFocused && {
        color: '#000',
      },
    ]),
  });
};
