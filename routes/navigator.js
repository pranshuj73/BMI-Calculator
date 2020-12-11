import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../screens/home';
import Result from '../screens/result';

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerStyle: {backgroundColor: '#03B898'},
      headerTintColor: '#fff',
      headerTitleAlign: 'center'
    }}>
      <Stack.Screen name="Home" component={Home} options={{title: "BMI Calculator"}}/>
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  </NavigationContainer>
);