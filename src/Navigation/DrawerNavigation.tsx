import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import CustomDrawerContent from './CustomDrawerContent';
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                drawerType: 'front',
                overlayColor: 'transparent',
                swipeEdgeWidth: 0,
            }}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen
                name="DrawerHome"
                component={StackNavigation}
                options={{}}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
