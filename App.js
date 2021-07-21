import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';


import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/AuthScreen';



  const MainNavigator = createBottomTabNavigator({
    auth: AuthScreen,
    welcome: WelcomeScreen
  })

  const App = createAppContainer(MainNavigator);

  export default () => {
    return (
     <App />
    );
  };