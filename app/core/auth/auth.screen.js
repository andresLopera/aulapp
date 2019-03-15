import React from "react";
import { AsyncStorage, StyleSheet, View, Text } from "react-native";

export class AuthScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    alert(userToken)

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'Home' : 'Login');
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
