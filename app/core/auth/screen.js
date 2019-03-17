import React from "react";
import {
  ActivityIndicator,
  StatusBar,
  Text,
  View,
} from "react-native";
import styles from './style';

import { connect } from 'react-redux';
import { getUserToken } from './actions';

class AuthScreen extends React.Component {

  constructor() {
    alert('run authScreen')
    super();
  }

  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    this.props.getUserToken().then(() => {
      alert('return getUserToken')
      this.props.navigation.navigate(this.props.token.token !== null ? 'App' : 'Auth');
    })
      .catch(error => {
        alert('error return token')
        this.setState({ error })
      })

  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token,
});

const mapDispatchToProps = dispatch => ({
  getUserToken: () => dispatch(getUserToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);