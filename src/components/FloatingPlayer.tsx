import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constant/Color'
import { GetFontFamily } from '../constant/FontFamily'
import PlayStation from './PlayStation'
import SeekSlider from './SeekSlider'
import { useSharedValue } from 'react-native-reanimated'
import MoveingTextHook from './MoveingTextHook'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const FloatingPlayer = ({ SelectionedSong }: any) => {
    console.log("🚀 ~ FloatingPlayer ~ SelectionedSong:", SelectionedSong)
    const navigation: NavigationProp<any> = useNavigation()
    const handleOpenPlayerScreen = () => {
        navigation.navigate('PlayScreen', { item: SelectionedSong })
    }
    console.log("🚀 ~ SeekSlider ~ SeekSlider:")
    const progress = useSharedValue(30);
    console.log("🚀 ~ SeekSlider ~ progress:",)
    const min = useSharedValue(0);
    const max = useSharedValue(1);
    return (
        <View>
            <SeekSlider />
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', flexShrink: 1, backgroundColor: colors.background, height: 70, opacity: .75 }} activeOpacity={0.65} onPress={handleOpenPlayerScreen}>
                <Image source={{ uri: SelectionedSong.artwork }} style={{ width: 70, height: 70, zIndex: 10 }} />
                <View style={{ marginTop: 7, marginLeft: 10, overflow: 'hidden', height: 100, justifyContent: 'center', gap: 4, }}>
                    <MoveingTextHook text={SelectionedSong.title} animationThreshold={8} style={{ ...styles.fontstyle, color: colors.textPrimary, marginTop: -10, }} />
                    <Text numberOfLines={1} ellipsizeMode='tail' style={{ ...styles.fontstyle, color: colors.textSecondary, marginTop: -5, alignSelf: 'center' }}>{SelectionedSong.artist}</Text>
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
        overflow: 'hidden',
        width: 210,

        // flex: 1

    }
})