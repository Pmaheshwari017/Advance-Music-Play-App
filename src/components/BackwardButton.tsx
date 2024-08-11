import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Feather from "react-native-vector-icons/Feather";
import { colors } from '../constant/Color'
import TrackPlayer from 'react-native-track-player';
import React from 'react';
const BackwardButton = () => {
    return (
        <TouchableOpacity onPress={async () => {
            let trackIndex = await TrackPlayer.getCurrentTrack();
            console.log("🚀 ~ <TouchableOpacityonPress={ ~ trackIndex:", trackIndex)
            let trackObject = await TrackPlayer.getTrack(trackIndex);
            console.log("🚀 ~ <TouchableOpacityonPress={ ~ trackObject:", trackObject)
            // await TrackPlayer.skipToPrevious();
            console.log("pre")
        }}>
            <Feather name="skip-back" size={30} color={colors.iconPrimary} />
        </TouchableOpacity>
    )
}

export default BackwardButton

const styles = StyleSheet.create({})