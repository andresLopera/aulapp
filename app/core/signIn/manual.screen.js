import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { StackActions, NavigationActions } from "react-navigation";

export class SignManualScreen extends React.Component {
  render() {
    return (
/*       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
      </View> */
      <View style={{flexDirection:"row",alignItems:'center'}}>
        <Text>Name:</Text>
        <TextInput
        underlineColorAndroid='transparent'
        style={{borderColor: 'gray', borderWidth: 1}}
        value="placeholder"
      />
        </View>
    );
  }
}
