import { createStackNavigator } from "react-navigation";

import { HomeScreen } from "./core/home/home.screen";
import { LoginScreen } from "./core/login/login.screen";
import { AuthScreen } from "./core/auth/auth.screen";

export const RouterApp = createStackNavigator({
  Auth: {
    screen: AuthScreen
  },
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  }
}, { initialRouteName: 'Auth' });
