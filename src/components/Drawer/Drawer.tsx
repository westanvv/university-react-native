import React, {memo, useCallback} from 'react';
import {DrawerContentScrollView, DrawerContentComponentProps, useDrawerStatus} from '@react-navigation/drawer';
import {Text, View} from 'react-native';
import {List} from 'react-native-paper';

import Icon from '@app/components/Icon';

import defaultStyles from './styles';

function Drawer({navigation}: Partial<DrawerContentComponentProps>) {
  // Checking Drawer status
  // const isDrawerOpen = useDrawerStatus() === 'open';

  const composeStyles = defaultStyles();

  const handleLogout = useCallback(() => {
    console.log('handleLogout');
    navigation?.navigate('Login');
  }, [navigation]);

  return (
    <DrawerContentScrollView contentContainerStyle={composeStyles.root} centerContent={false}>
      <View style={composeStyles.header}>
        <List.Item
          title="Header"
          titleStyle={composeStyles.headerTitle}
          descriptionStyle={composeStyles.headerDescription}
          titleNumberOfLines={2}
          left={({style}) => (
            <View style={[style, composeStyles.listLeft]}>
              <Icon name="window-close" style={composeStyles.listLeftIcon} />
            </View>
          )}
          onPress={navigation!.closeDrawer}
        />
      </View>
      <View style={composeStyles.content}>
        <List.Item
          title="Profile"
          description="desc"
          titleStyle={composeStyles.listTitle}
          descriptionStyle={composeStyles.listDescription}
          left={({style}) => (
            <View style={[style, composeStyles.listLeft]}>
              <Icon name="account-circle-outline" style={composeStyles.listLeftIcon} />
            </View>
          )}
          onPress={() => {
            navigation!.closeDrawer();
            navigation!.navigate('Dashboard', {
              screen: 'Profile',
            });
          }}
        />
        <List.Item
          title="logout"
          titleStyle={composeStyles.listTitle}
          descriptionStyle={composeStyles.listDescription}
          titleNumberOfLines={2}
          left={({style}) => (
            <View style={[style, composeStyles.listLeft]}>
              <Icon name="logout-variant" style={composeStyles.listLeftIcon} />
            </View>
          )}
          onPress={handleLogout}
        />
      </View>
      <View style={composeStyles.footer}>
        <Text style={composeStyles.version}>1.0.0</Text>
      </View>
    </DrawerContentScrollView>
  );
}

export default memo(Drawer);
