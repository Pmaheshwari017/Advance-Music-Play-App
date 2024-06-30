import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSharedValue } from 'react-native-reanimated';
import { Slider } from 'react-native-awesome-slider';

const SeekSlider = () => {
    console.log("🚀 ~ SeekSlider ~ SeekSlider:")
    const progress = useSharedValue(30);
    console.log("🚀 ~ SeekSlider ~ progress:",)
    const min = useSharedValue(0);
    const max = useSharedValue(100);
    return (
        <Slider
            style={{ flex: 1 }}
            progress={progress}
            minimumValue={min}
            maximumValue={max}
        />
    );
}

export default SeekSlider

const styles = StyleSheet.create({})