import React from 'react';
import {NavigationContainer, InitialState} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DrawerContent from '@app/components/Drawer';
import BottomTabBar from '@app/components/BottomTabBar';
import Icon from '@app/components/Icon';

import LoginScreen from '@app/screens/Login';
import DashboardScreen from '@app/screens/Dashboard';
import ProfileScreen from '@app/screens/Profile';
import AboutUsScreen from '@app/screens/AboutUs';

import {saveState, navigationRef} from '@app/navigation/helpers';
import {RootParamList, DashboardParamList, DashboardRouteProp} from '@app/navigation/types';

export interface NavigationProps {
  initialState?: InitialState;
}

const Drawer = createDrawerNavigator<RootParamList>();
const BottomTab = createBottomTabNavigator<DashboardParamList>();

function Navigation({initialState}: NavigationProps) {
  const options = {
    gestureEnabled: false, // if you want to swipe back
    swipeEnabled: true,
    ...TransitionPresets.SlideFromRightIOS,
  };

  return (
    <NavigationContainer ref={navigationRef} initialState={initialState} onStateChange={saveState}>
      <Drawer.Navigator
        initialRouteName="Login"
        defaultStatus="closed"
        backBehavior="history"
        screenOptions={{
          drawerPosition: 'left',
          drawerStyle: {width: Math.min(340, 600)},
          drawerType: 'slide',
          drawerHideStatusBarOnOpen: false,
          headerShown: false,
          unmountOnBlur: true,
        }}
        drawerContent={({navigation}) => <DrawerContent navigation={navigation} />}
      >
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={{
            ...options,
            swipeEnabled: false,
          }}
        />
        <Drawer.Screen name="Dashboard" options={options}>
          {props => {
            const params = (props.route as DashboardRouteProp).params?.params;

            return (
              <BottomTab.Navigator
                initialRouteName="AboutUs"
                backBehavior="history"
                screenOptions={{
                  headerShown: false,
                  // unmountOnBlur: true,
                }}
                tabBar={({state, descriptors, navigation}) => (
                  <BottomTabBar state={state} descriptors={descriptors} navigation={navigation} />
                )}
              >
                <BottomTab.Screen
                  name="AboutUs"
                  component={AboutUsScreen}
                  options={{
                    tabBarLabel: 'AboutUs',
                    tabBarIcon: ({color, focused, size}) => (
                      <Icon name={focused ? 'calendar-clock' : 'calendar-clock-outline'} color={color} size={size} />
                    ),
                  }}
                  initialParams={params}
                />
                <BottomTab.Screen
                  name="Profile"
                  component={ProfileScreen}
                  options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({color, focused, size}) => (
                      <Icon name={focused ? 'account-circle' : 'account-circle-outline'} color={color} size={size} />
                    ),
                  }}
                  initialParams={params}
                />
              </BottomTab.Navigator>
            );
          }}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
