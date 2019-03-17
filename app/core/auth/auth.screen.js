import React from "react";
import { AsyncStorage, StyleSheet, View, Text } from "react-native";
import AuthService from './authService';
import AppConst from '../../common/config/constants';
import { StackActions, NavigationActions } from "react-navigation";

export class AuthScreen extends React.Component {

  authService = new AuthService();

  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storageå then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem(AppConst.TOKEN_KEY)
    const routeName = userToken ? 'OnBoard': 'Login';

    this.props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'OnBoard' })
      ],
    }))

  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
         <Text>Auth Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
