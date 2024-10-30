import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './src/screen/Homescreen';
import LoginScreen from './src/screen/LoginScreen';
import Registration from './src/screen/Registration';
import insideapp from './src/screen/Insideapp';
import 'react-native-get-random-values';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={{headerShown: false,}}>
      <Stack.Screen name={"HOME"} component={Homescreen}/>
      <Stack.Screen name={"LOGIN"} component={LoginScreen}/>
      <Stack.Screen name={"REGISTER"} component={Registration}/>
      <Stack.Screen name={"INSIDE"} component={insideapp }/>



      </Stack.Navigator> 
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})