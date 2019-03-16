import { createStackNavigator } from "react-navigation";

import { HomeScreen } from "./core/home/home.screen";
import { LoginScreen } from "./core/login/login.screen";
import { AuthScreen } from "./core/auth/auth.screen";
import { OnBoardScreen } from "./core/auth/onboard.screen";

export const RouterApp = createStackNavigator({
  Auth: {
    screen: AuthScreen
  },
  OnBoard: {
    screen: OnBoardScreen
  },
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  }
}, { initialRouteName: 'Auth' });
