import * as React from "react";
import { View, Text, Button } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

interface Props {
  navigation: any
}

interface State {
  text: string;
}

export class HomeScreen extends React.Component<Props, State> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Login"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Login' })
              ],
            }))
          }}
        />
      </View>
    );
  }
}
