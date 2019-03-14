import * as React from "react";
import { View, Text } from "react-native";

export class AuthLoadingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Auth Loading screen</Text>
      </View>
    );
  }
}

export default AuthLoadingScreen;
