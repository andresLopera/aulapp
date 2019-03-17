import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';

export default styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: AppStyles.colors.primary
    },
    title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold'
    },
    paragraph: {
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
