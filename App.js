import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './app/navigator'
import store from './app/config/store';


export default () => (
  <Provider store={store}>
    <View style={styles.container}>
      <AppNavigator />
    </View>
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
