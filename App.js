/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {AppNavigator, init, store, vocabularyStoreManager} from './src/utils';
import {SET_VOCABULARY} from './src/actions/vocabulary';

const App = () => {
  const [ready, setReady] = useState(false);
  const [reduxStore, setReduxStore] = useState();
  useEffect(() => {
    init().finally(async () => {
      setReduxStore(store);
      const words = await vocabularyStoreManager.getWords();
      store.dispatch({type: SET_VOCABULARY, payload: {words}});
      setReady(true);
    });
  }, []);

  return ready && reduxStore ? (
    <Provider store={reduxStore}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  ) : (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" color="red" />
    </View>
  );
};

export default App;
