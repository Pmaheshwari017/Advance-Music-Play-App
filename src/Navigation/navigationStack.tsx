import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DrawerNavigation from './DrawerNavigation';

const Stacks = createNativeStackNavigator()
const NavigationStack = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>

  )
}

export default NavigationStack

const styles = StyleSheet.create({})