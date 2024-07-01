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
import MoveingTextHook from './MoveingTextHook'

const FloatingPlayer = () => {
    console.log("🚀 ~ SeekSlider ~ SeekSlider:")
    const progress = useSharedValue(30);
    console.log("🚀 ~ SeekSlider ~ progress:",)
    const min = useSharedValue(0);
    const max = useSharedValue(1);
    return (
        <View>
            {/* <View style={{ borderWidth: 1, borderColor: 'red' }}> */}

            <SeekSlider />
            {/* </View> */}

            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', flexShrink: 1, backgroundColor: colors.background, height: 70, opacity: .75 }} activeOpacity={0.65}>
                <Image source={{ uri: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/152/325x325/1705340894_JZ2NifV4gB_2024---CARTOON-JEYJA---On--On-ft.-Daniel-Levi.jpg' }} style={{ width: 70, height: 70, zIndex: 10 }} />
                <View style={{ marginTop: 7, marginLeft: 10, overflow: 'hidden', height: 100, justifyContent: 'center', gap: 4, }}>
                    <MoveingTextHook text={'On & On (feat. Daniel Levi)'} animationThreshold={8} style={{ ...styles.fontstyle, color: colors.textPrimary, marginTop: -10, }} />
                    {/* <Text numberOfLines={1} ellipsizeMode='tail' style={{ ...styles.fontstyle, color: colors.textPrimary }}>On & On (feat. Daniel Levi)</Text> */}
                    {/* <Animate left={true} duration={1000} leftP={-Dimensions.get('window').width}> */}

                    <Text numberOfLines={1} ellipsizeMode='tail' style={{ ...styles.fontstyle, color: colors.textSecondary, marginTop: -5, alignSelf: 'center' }}>Cartoon, Daniel Levi, Jéja</Text>
                    {/* </Animate> */}
                </View>

                {/* <View> */}
                <PlayStation />
                {/* </View> */}

            </TouchableOpacity >
        </View>
    )
}

export default FloatingPlayer

const styles = StyleSheet.create({
    fontstyle: {
        fontFamily: GetFontFamily.Medium,
        fontSize: 18,
        overflow: 'hidden',
        width: 210,

        // flex: 1

    }
})