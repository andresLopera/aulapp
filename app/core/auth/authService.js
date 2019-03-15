import { AsyncStorage } from 'react-native';

export default class AuthService {
  //static TOKEN_KEY = 'AUTH_TOKEN'

  validateToken = function() {
  }


  async setToken(currentTokenValue) {
    try {
      alert('TOKEN_KEY')
      await AsyncStorage.setItem('TOKEN_KEY', currentTokenValue)
    } catch (error) {
      console.log('AsyncStorage error set Token: ' + error.message)
    }
  }

  async getToken() {
    try {
      await AsyncStorage.getToken('TOKEN_KEY')
    } catch (error) {
      console.log('AsyncStorage error return token: ' + error.message)
    }
  }

}
