import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { HomeScreen } from './core/home/screen';
import { SignScreen } from './core/signIn/screen';
import AuthScreen from './core/auth/screen';

const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({ SignIn: SignScreen });

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