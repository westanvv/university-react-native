import React, {useCallback} from 'react';
import {View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import services from '@app/services';
import {NavigationProps} from '@app/navigation';
import {useSelector} from '@app/redux';

import defaultStyles from './Login.styles';

function Login() {
  const user = useSelector(state => state.app.user);

  const navigation = useNavigation<NavigationProps>();
  const styles = defaultStyles();

  const handleLogin = useCallback(() => {
    services.geolocation.getCurrentPosition();
    // navigation.navigate('Dashboard', {
    //   screen: 'AboutUs',
    // });
  }, []);

  return (
    <View style={styles.root}>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

export default Login;
