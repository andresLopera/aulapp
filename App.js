import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './app/navigator'
import store from './app/config/store';
import { Text } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import cacheAssetsAsync from './app/cacheAssetsAsync';

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

export default class AppContainer extends React.Component {

  state = {
    appIsReady: false,
  };

  componentDidMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        fonts: [
          { 'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf') },
          { 'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf') },
        ],
      });
    } catch (e) {
      console.warn(
        'There was an error caching assets (see: main.js), perhaps due to a ' +
          'network timeout, so we skipped caching. Reload the app to try again.'
      );
      console.log(e.message);
    } finally {
      this.setState({ appIsReady: true });
    }
  }



  render() {
    if (this.state.appIsReady) {
      return (
        <Provider store={store}>
          <PaperProvider theme={theme}>
            <AppNavigator />
          </PaperProvider>
        </Provider>
      )
    } else {
      return (
        <Text>Loading</Text>
      )
    }
  }
}
