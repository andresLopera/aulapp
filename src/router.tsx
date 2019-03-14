import { createStackNavigator } from "react-navigation";

import { HomeScreen } from "./core/home/home.screen";
import { LoginScreen } from "./core/login/login.screen";
import { AuthLoadingScreen } from "./core/authLoading/authLoading.screen";


export const RouterApp = createStackNavigator({
  AuthLoading: {
    screen: AuthLoadingScreen
  },
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  }
}, { initialRouteName: 'AuthLoading' });
