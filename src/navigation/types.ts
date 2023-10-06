import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {MaterialBottomTabNavigationProp} from '@react-navigation/material-bottom-tabs';

export type DashboardParamList = {
  AboutUs: undefined;
  Profile: undefined;
};

export type RootParamList = {
  Login: undefined;
  Dashboard: NavigatorScreenParams<DashboardParamList>;
};

export type NavigationProps = DrawerNavigationProp<RootParamList>;

export type DashboardNavigationProps = MaterialBottomTabNavigationProp<DashboardParamList>;

export type DashboardRouteProp = RouteProp<RootParamList, 'Dashboard'>;
