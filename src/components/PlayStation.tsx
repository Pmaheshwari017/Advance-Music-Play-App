import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackwardButton from './BackwardButton'
import PlayButton from './PlayButton'
import ForwardButton from '../components/ForwardButton'

const PlayStation = () => {
    return (
        <View style={{
            flexDirection: 'row', justifyContent:
                'space-around', width: 145, marginRight: 10, alignItems: 'center'
        }}>
            <BackwardButton />
            <PlayButton />
            <ForwardButton />
        </View>
    )
}

export default PlayStation

const styles = StyleSheet.create({})