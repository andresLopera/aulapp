import { createStackNavigator } from "react-navigation";

import { HomeScreen } from "./core/home/home.screen";
import { LoginScreen } from "./core/login/login.screen";

export const RouterApp = createStackNavigator({
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  }
}, { initialRouteName: 'Login' });
