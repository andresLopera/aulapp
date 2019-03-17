import React from "react";
import { View, Text, Button } from "react-native";
import styles from './style';

export class OnBoardScreen extends React.Component {

  viaEmail = () => {
    alert('via Email')
  }

  manual = () => {
    const { navigation } = this.props;
    navigation.navigate('ManualSignIn');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Comunicación escolar</Text>
        <Text>sin complicaciones</Text>
        <Text>Iniciar Sesión</Text>
        <Button
          title="Via Email"
          onPress={this.viaEmail}
        />
        <Button
          title="Manual"
          onPress={this.manual}
        />
      </View>
    );
  }
}
