import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import Home from '../../src/Screen/Home';
import Dashboard from '../../src/Screen/Home';
const Stacks = createNativeStackNavigator()
const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stacks.Navigator>
        <Stacks.Screen name="Home" component={Home} options={{
          headerShown: false
        }} />
        <Stacks.Screen name="Profile" component={Dashboard} />
      </Stacks.Navigator>
    </NavigationContainer>
  )
}

export default NavigationStack

const styles = StyleSheet.create({})