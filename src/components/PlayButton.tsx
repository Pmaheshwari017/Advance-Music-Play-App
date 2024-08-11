import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";

import React, { useState } from 'react'
import { colors } from '../constant/Color';
import TrackPlayer, { State } from 'react-native-track-player';

const PlayButton = () => {
    const [playPause, setPlayPause] = useState<boolean>()
    return (
        <TouchableOpacity onPress={async () => {
            let trackIndex = await TrackPlayer?.getCurrentTrack();
            console.log("🚀 ~ <TouchableOpacityonPress={ ~ trackIndex:", trackIndex)
            const state = await TrackPlayer?.getState();
            if (state === State.Playing) {
                setPlayPause(false)
                await TrackPlayer.pause()
                return
            };
            setPlayPause(false)
            await TrackPlayer.play()

        }}>
            <AntDesign name={!playPause ? "pause" : 'play'} size={30} color={colors.iconPrimary} />

        </TouchableOpacity>
    )
}

export default PlayButton

const styles = StyleSheet.create({})