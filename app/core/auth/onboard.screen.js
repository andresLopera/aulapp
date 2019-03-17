import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export class OnBoardScreen extends React.Component {

  onViaEmail = () => {
    alert('via Email')
  }

  onManual = () => {
    alert('Manual')
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
         <Text>Comunicación escolar</Text>
         <Text>sin complicaciones</Text>
         <Text>Iniciar sessión</Text>
         <Button title="Via Email" onPress={this.onViaEmail}
         />
         <Button title="Manual" onPress={this.onManual} />
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
