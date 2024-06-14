import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { NavigationContainer } from '@react-navigation/native';
import SignUp from '../pages/login';
import Register from '../pages/register/Register';
import ConfirmEmail from '../pages/ConfirmEmail/ConfirmEmail';
import ForgetPass from '../pages/ForgetPass';
import NewPassWord from '../pages/NewPassWord';
import Home from '../pages/Home'
// import { NavigationContainer } from '@react-navigation/native';
const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="SignIn" component={SignUp}/>
        <Stack.Screen name="SignUp" component={Register}/>
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmail}/>
        <Stack.Screen name="ForgotPassword" component={ForgetPass}/>
        <Stack.Screen name="NewPassword" component={NewPassWord}/>
        <Stack.Screen name="Home" component={Home}/>   
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default index