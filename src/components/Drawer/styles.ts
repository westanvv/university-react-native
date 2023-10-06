import {StyleSheet, StyleProp, ViewStyle, TextStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export type DrawerStyles = {
  root?: StyleProp<ViewStyle>;
  header?: StyleProp<ViewStyle>;
  content?: StyleProp<ViewStyle>;
  footer?: StyleProp<ViewStyle>;
  version?: StyleProp<TextStyle>;
  headerTitle?: StyleProp<TextStyle>;
  headerDescription?: StyleProp<TextStyle>;
  listTitle?: StyleProp<TextStyle>;
  listTitleButton?: StyleProp<TextStyle>;
  listDescription?: StyleProp<TextStyle>;
  listLeft?: StyleProp<ViewStyle>;
  listLeftIcon?: StyleProp<TextStyle>;
  listLeftImage?: StyleProp<any>;
  listLanguageSelector: TextStyle;
  listLanguageInput: TextStyle;
  listLanguageImage: ViewStyle;
  listLanguageTitle: TextStyle;
  footerListTitle?: StyleProp<TextStyle>;
  footerListDescription?: StyleProp<TextStyle>;
  listRight?: StyleProp<ViewStyle>;
  listRightIcon?: StyleProp<TextStyle>;
  footerButton?: StyleProp<ViewStyle>;
};

export default (): DrawerStyles => {
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    root: {
      minHeight: '100%',
      paddingTop: insets.top + 3, // Appbar has shadows, "3" value is used to fix the difference of heights
    },
    header: {
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderColor: '#000',
    },
    content: {
      flexGrow: 1,
      backgroundColor: '#fff',
      paddingTop: 24,
    },
    footer: {
      backgroundColor: '#efefef',
      paddingTop: 10,
      paddingBottom: insets.bottom + 10,
    },
    version: {
      textAlign: 'center',
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: '700',
    },
    headerDescription: {},
    listTitle: {
      fontSize: 18,
      fontWeight: '600',
      paddingLeft: 10,
      color: '#000',
    },
    listTitleButton: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 18,
    },
    listDescription: {
      paddingLeft: 10,
      paddingTop: 10 / 2,
    },
    listLeft: {
      width: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 6,
      marginRight: 10,
    },
    listLeftIcon: {
      fontSize: 30,
      color: 'black',
    },
    listLeftImage: {
      width: 28,
      height: 28,
      marginLeft: 12,
      marginRight: 4,
      marginTop: 12,
    },
    listLanguageSelector: {
      width: 145,
      paddingLeft: 16,
    },
    listLanguageImage: {
      paddingTop: 16,
      paddingLeft: 10 + 3,
    },
    listLanguageInput: {
      backgroundColor: '#fff',
    },
    listLanguageTitle: {
      fontSize: 18,
      fontWeight: '600',
      color: '#000',
    },
    footerListTitle: {
      fontSize: 20,
      fontWeight: '700',
    },
    footerListDescription: {
      color: 'grey',
      fontSize: 14,
    },
    listRight: {
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10,
    },
    listRightIcon: {
      fontSize: 24,
      color: 'blue',
    },
    footerButton: {
      justifyContent: 'flex-start',
    },
  });
};
