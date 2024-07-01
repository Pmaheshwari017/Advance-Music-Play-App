import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSharedValue } from 'react-native-reanimated';
import Octicons from "react-native-vector-icons/Octicons";

import { Slider } from 'react-native-awesome-slider';
import { colors } from '../constant/Color';

const SeekSlider = () => {
    console.log("🚀 ~ SeekSlider ~ SeekSlider:")
    const progress = useSharedValue(30);
    console.log("🚀 ~ SeekSlider ~ progress:",)
    const min = useSharedValue(0);
    const max = useSharedValue(100);
    return (
        <Slider
            style={{ width: "100%", marginBottom: 5, zIndex: 10 }}
            progress={progress}
            minimumValue={min}
            maximumValue={max}
            theme={{
                maximumTrackTintColor: '#555B6A',
                minimumTrackTintColor: '#fff',
            }}
            renderBubble={() => <View />}
        // renderThumb={() => {
        //     return (
        //         <View style={{ marginRight: -100 }}>
        //             <Octicons name="dot-fill" size={30} color={'white'} />
        //         </View>
        //     )
        // }}
        />
    );
}

export default SeekSlider

const styles = StyleSheet.create({})