import React from "react";
import { StyleSheet, View, Text } from "react-native";

export class OnBoardScreen extends React.Component {

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
         <Text>OnBoard Screen</Text>
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
