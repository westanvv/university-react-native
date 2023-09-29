import React, {memo, useMemo} from 'react';
import {StyleProp} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export interface IconProps {
  color?: string;
  name: string;
  onPress?(event: any): void;
  size?: number;
  style?: StyleProp<any>;
  type?: 'mci' | 'mi' | 'fa';
}

function Icon({color, name, onPress, size = 12, style, type = 'mci'}: IconProps) {
  const Component = useMemo(() => {
    switch (type) {
      case 'mci':
        return MaterialCommunityIcons;

      case 'mi':
        return MaterialIcons;

      case 'fa':
        return FontAwesome5;

      default:
        return FontAwesome5;
    }
  }, [type]);

  return <Component color={color} name={name} size={size} style={style} onPress={onPress} />;
}

export default memo(Icon);
