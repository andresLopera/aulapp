import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { HomeScreen } from './core/home/screen';
import { SignManualScreen } from './core/signIn/manual.screen';
import AuthScreen from './core/auth/screen';
import { OnBoardScreen } from './core/onboard/screen';

const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({
  OnBoard: OnBoardScreen,
  ManualSignIn: SignManualScreen
},{
  initialRouteName: 'OnBoard'
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));