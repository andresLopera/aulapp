import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';

export default styles = StyleSheet.create({
    container: {
      fontFamily: 'montserrat-regular',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: AppStyles.colors.primary
    },
    title: {
      fontFamily: 'montserrat-bold',
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold'
    },
    paragraph: {
      fontFamily: 'montserrat-regular',
      color: 'white',
      fontSize: 20
    },
    subtitle: {
      color: AppStyles.colors.white10,
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 50,
      marginBottom: 20
    },
    btn: {
      width: '100%',
      marginTop: 10,
      marginBottom: 10
    },
    btnInverse: {
      backgroundColor: 'white',
      color: AppStyles.colors.primary
    },
    btnAccent: {
      backgroundColor: AppStyles.colors.accentColor
    }
  });
