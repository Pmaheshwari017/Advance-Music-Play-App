import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screen/Home';
import LikeScreen from '../Screen/LikeScreen';
import PlayScreen from '../Screen/PlayScreen';
import CameraScreen from '../Screen/CameraScreen';

const Stacks = createNativeStackNavigator()
const StackNavigation = () => {
    return (

        <Stacks.Navigator initialRouteName='Home'>
            <Stacks.Screen name="Home" component={Home} options={{
                headerShown: false
            }} />
            <Stacks.Screen name="LikeScreen" component={LikeScreen} options={{
                headerShown: false
            }} />
            <Stacks.Screen name="PlayScreen" component={PlayScreen} options={{
                headerShown: false,
                presentation: 'modal'

            }} />
        </Stacks.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})