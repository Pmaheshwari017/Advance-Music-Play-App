import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constant/Color'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
const DrawerItems = [
    { title: 'Profile', icon: 'person-outline' },
    { title: 'Liked Songs', icon: 'heart' },
    { title: 'Language', icon: 'language' },
    { title: 'Contact Us', icon: 'email-outline' },
    { title: 'FAQs', icon: 'question-circle-o' },
    { title: 'Settings', icon: 'settings' },

]
const CustomDrawerContent: any = (props: any) => {
    const isDarkMode = true;
    const handleNavigation = () => {
        props.navigation.toggleDrawer();
    }
    return (
        <DrawerContentScrollView style={{ flex: 1, backgroundColor: colors.background }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 10, marginLeft: 30 }}>
                <TouchableOpacity onPress={handleNavigation}>
                    <AntDesign name="close" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Octicons name={isDarkMode ? "sun" : 'moon'} size={30} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 20, marginTop: 40 }}>
                {DrawerItems.map((item, index) => {
                    return (
                        <View key={index} style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingVertical: 15 }}>
                            {item.title === 'Liked Songs' ?
                                <Octicons key={index} name={item.icon} size={23} color="grey" /> :
                                item.title === 'Language' ?
                                    <FontAwesome key={index} name={item.icon} size={25} color="grey" /> :
                                    item.title === 'Contact Us' ?
                                        <MaterialCommunityIcons key={index} name={item.icon} size={25} color="grey" /> :
                                        item.title === 'FAQs' ?
                                            <FontAwesome key={index} name={item.icon} size={25} color="grey" />
                                            :
                                            <MaterialIcons key={index} name={item.icon} size={25} color="grey" />


                            }
                            <Text style={{ color: 'white', marginLeft: 25, fontSize: 17 }}>{item.title}</Text>
                        </View>
                    )
                })}
            </View>


        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent

const styles = StyleSheet.create({})