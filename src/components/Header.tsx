import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'

const Header = () => {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <Icon name="grip-lines" size={30} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name="search1" size={30} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 20
    }
})