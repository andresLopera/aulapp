import React from "react";
import { View, Text } from "react-native";
import styles from './style';
import { Button, Paragraph } from 'react-native-paper';

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
        <Text style={styles.title}>Comunicación escolar</Text>
        <Text style={styles.paragraph}>sin complicaciones</Text>
        <Text style={styles.subtitle}>Iniciar Sesión</Text>
        <Button color="white" style={[styles.btn, styles.btnInverse]} mode="contained" uppercase={false} onPress={this.viaEmail}>Via Email</Button>
        <Button style={[styles.btn, styles.btnAccent]} mode="contained" uppercase={false} onPress={this.manual}>Manual</Button>
      </View>
    );
  }
}
