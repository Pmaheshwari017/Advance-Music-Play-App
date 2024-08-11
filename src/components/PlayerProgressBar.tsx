import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SeekSlider from './SeekSlider'

const PlayerProgressBar = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20, marginBottom: 20 }}>
                <Text style={{ color: 'white' }}>0.123</Text>
                <Text style={{ color: 'white' }}>0.123</Text>
            </View>
            <View style={{ marginHorizontal: 20 }}>

                <SeekSlider />
            </View>
        </View>
    )
}

export default PlayerProgressBar

const styles = StyleSheet.create({})