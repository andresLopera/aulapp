import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AuthService from './authService';

export class AuthScreen extends React.Component {

  authService = new AuthService();
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storageå then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = '1';
    this.authService.setToken('andres')

    this.authService.getToken( (token) => {
      alert(token)
    });

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    //this.props.navigation.navigate(userToken ? 'Home' : 'Login');
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
