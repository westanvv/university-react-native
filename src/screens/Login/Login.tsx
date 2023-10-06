import React, {useCallback} from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {NavigationProps} from '@app/navigation';

function Login() {
  const navigation = useNavigation<NavigationProps>();

  const handleLogin = useCallback(() => {
    console.log('handleLogin');
    navigation.navigate('Dashboard');
  }, []);

  return (
    <View
      style={{
        paddingTop: 60,
        padding: 16,
      }}
    >
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

export default Login;
