import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

export type LoginStyles = {
  root: ViewStyle;
  desc: TextStyle;
};

export default (): LoginStyles => {
  return StyleSheet.create({
    root: {
      padding: 16,
    },
    desc: {
      fontSize: 16,
    },
  });
};
