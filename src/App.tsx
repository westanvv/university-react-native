import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {LogBox} from 'react-native';

import {getStore} from '@app/redux';
import Navigation from '@app/navigation';
import services from '@app/services';
import {appThunks} from '@app/redux';

LogBox.ignoreAllLogs();

const {store, persistor} = getStore();

function App() {
  // Uncomment this if you need to reset redux state (after first reload, you have to reload the app once again)
  // persistor.purge();

  const [rehydrated, setRehydration] = useState(false);

  useEffect(() => {
    if (rehydrated) {
      services.fcm({
        addMessage: appThunks.addMessage,
      });
      services.geolocation.init({
        setPosition: appThunks.setGeoPosition,
      });

      services.geolocation.getCurrentPosition();
    }
  }, [rehydrated]);

  const onBeforeLift = async () => {
    // Need to get rehydrated route
    setRehydration(true);
  };

  return (
    <Provider store={store}>
      <PersistGate onBeforeLift={onBeforeLift} persistor={persistor}>
        {rehydrated && <Navigation />}
      </PersistGate>
    </Provider>
  );
}

export default App;
