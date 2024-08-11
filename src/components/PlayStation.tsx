import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackwardButton from './BackwardButton'
import PlayButton from './PlayButton'
import ForwardButton from '../components/ForwardButton'

const PlayStation = ({ playScreen }: { playScreen?: boolean }) => {
    return (
        <View style={{
            flexDirection: 'row', justifyContent:
                'space-around', width: playScreen ? 245 : 145, alignItems: 'center',
            flexShrink: 1,
            padding: 5
            // zIndex: 10
        }}>
            <BackwardButton />
            <PlayButton />
            <ForwardButton />
        </View>
    )
}

export default PlayStation

const styles = StyleSheet.create({})