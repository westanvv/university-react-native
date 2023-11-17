import React, {useCallback} from 'react';
import {View, Text, Button, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {NavigationProps} from '@app/navigation';
import {useSelector, appThunks, useDispatch} from '@app/redux';

import defaultStyles, {LoginStyles} from './Login.styles';

function Login() {
  const user = useSelector(state => state.app.user);
  const user2 = useSelector(state => state.user.user);

  const messages = useSelector(state => state.app.messages);
  const navigation = useNavigation<NavigationProps>();
  const styles = defaultStyles();

  console.log(user, user2);
  const handleLogin = useCallback(() => {
    appThunks.setUser({
      id: '1',
      name: 'Test user',
    });
    console.log('handleLogin');
    // navigation.navigate('Dashboard');
  }, []);

  return (
    <View style={[styles.root]}>
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.desc}>{user?.name}</Text>

      <View style={{flexDirection: 'column'}}>
        {messages.map((message, index) => (
          <View key={index} style={{width: '100%'}}>
            <Text style={styles.desc}>{message?.title}</Text>
            <Text style={styles.desc}>{message?.message}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default Login;
