import React from "react";
import { View, Text, Button } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

export class SignScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SignIn Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))
          }}
        />
      </View>
    );
  }
}
