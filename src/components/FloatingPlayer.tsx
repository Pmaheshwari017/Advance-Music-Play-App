import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constant/Color'
import { GetFontFamily } from '../constant/FontFamily'
import PreviousButton from './BackwardButton'
import BackwardButton from './BackwardButton'
import PlayStation from './PlayStation'
import Animate from './AnimationText'
import SeekSlider from './SeekSlider'
import { useSharedValue } from 'react-native-reanimated'
import { Slider } from 'react-native-awesome-slider'

const FloatingPlayer = () => {
    console.log("🚀 ~ SeekSlider ~ SeekSlider:")
    const progress = useSharedValue(30);
    console.log("🚀 ~ SeekSlider ~ progress:",)
    const min = useSharedValue(0);
    const max = useSharedValue(100);
    return (
        <View>
            {/* <SeekSlider /> */}
            <Slider
                style={{ width: "100%", height: 40, marginTop: 10, marginBottom: 5, zIndex: 10 }}
                progress={progress}
                minimumValue={min}
                maximumValue={max}
                theme={{
                    maximumTrackTintColor: '#555B6A',
                    minimumTrackTintColor: '#fff',
                }}

            />
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} activeOpacity={0.8}>
                <Image source={{ uri: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/152/325x325/1705340894_JZ2NifV4gB_2024---CARTOON-JEYJA---On--On-ft.-Daniel-Levi.jpg' }} style={{ width: 70, height: 70 }} />
                <View style={{ marginHorizontal: 15, marginTop: -7 }}>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={{ ...styles.fontstyle, color: colors.textPrimary }}>On & On (feat. Daniel Levi)</Text>
                    {/* <Animate left={true} duration={1000} leftP={-Dimensions.get('window').width}> */}
                    <Text numberOfLines={1} ellipsizeMode='tail' style={{ ...styles.fontstyle, color: colors.textSecondary, }}>Cartoon, Daniel Levi, Jéja</Text>

                    {/* </Animate> */}
                </View>

                <PlayStation />
            </TouchableOpacity >
        </View>
    )
}

export default FloatingPlayer

const styles = StyleSheet.create({
    fontstyle: {
        fontFamily: GetFontFamily.Medium,
        fontSize: 18,
        width: 210

    }
})