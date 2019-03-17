import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigator from './app/navigator'
import store from './app/config/store';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2A6DE2',
    accent: '#f1c40f',
    background: '#f9f9f9',
    paper: 'white'
  }
};

export default () => (
  <Provider store={store}>
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  </Provider>
)

