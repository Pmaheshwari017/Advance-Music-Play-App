import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constant/Color'
import Header from '../components/Header'

const CameraScreen = () => {
    return (
        <View style={styles.container}>
            <Header screenName='Home' />

        </View>
    )
}

export default CameraScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
})