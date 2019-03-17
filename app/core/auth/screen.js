import React from "react";
import {
  ActivityIndicator,
  StatusBar,
  Button,
  View,
} from "react-native";
import styles from './style';

import { connect } from 'react-redux';
import { getUserToken, saveUserToken } from './actions';

class AuthScreen extends React.Component {

  constructor() {
    super();
  }


  logIn = () => {
    alert('logIn Press')
    this.props.saveUserToken('ANDRES LOPERA TOKEN');
  }

  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    this.props.getUserToken().then(() => {
        this.props.navigation.navigate('Auth')
      //this.props.navigation.navigate(this.props.token !== null ? 'App' : 'Auth')
    })
      .catch(error => {
        this.props.navigation.navigate('Auth')
        alert('error return token')
        this.setState({ error })
      })

  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
        <Button title="Login" onPress={this.logIn}/>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token,
});

const mapDispatchToProps = dispatch => ({
  getUserToken: () => dispatch(getUserToken()),
  saveUserToken:(token) => dispatch(saveUserToken(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);