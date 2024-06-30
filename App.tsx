import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import NavigationStack from './src/Navigation/navigationStack'


const App = () => {
  return (
    // <Stack />
    // <Stack1 />
    <GestureHandlerRootView style={{ flex: 1 }}>

      <NavigationStack />
    </GestureHandlerRootView>
    // <View>
    //   <Text>App</Text></View>
  )
}

export default App

const styles = StyleSheet.create({})