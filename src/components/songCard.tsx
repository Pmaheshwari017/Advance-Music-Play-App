import { Image, StyleProp, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constant/Color'
import { GetFontFamily } from '../constant/FontFamily'
import { useNavigation } from '@react-navigation/native'
import TrackPlayer from 'react-native-track-player'

const SongCard = ({ item, customContainerStyle, imageStyle, CoverImage, coverStyle, handlePlay }: { item: any, customContainerStyle?: StyleProp<any>, imageStyle?: StyleProp<any>, CoverImage?: string, coverStyle?: StyleProp<any>, handlePlay: any }) => {
    const navigation: any = useNavigation();
    const hendlePress = async (item: any) => {
        handlePlay(item)
        // await TrackPlayer.add(item)
        // await TrackPlayer.play()
        // setTimeout(async () => {
        //     await TrackPlayer.stop()
        // }, 20000)
        // navigation.navigate('PlayScreen', { item: item })
    }
    const imageURI = 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/538/325x325/1696583182_QUThTOGvco_Final.jpg'
    return (
        <TouchableOpacity onPress={() => hendlePress(item)} style={{ width: CoverImage ? 350 : 255, height: CoverImage ? 450 : customContainerStyle ? 265 : 300, marginHorizontal: 1, ...customContainerStyle, ...coverStyle }}>
            <Image source={{ uri: item?.artwork }} style={{ width: CoverImage ? 300 : 230, height: CoverImage ? 300 : 230, borderRadius: 10, marginVertical: 2, ...imageStyle }} />
            {!CoverImage && <View style={{ gap: 4, alignItems: 'center', flex: 1 }}>
                <Text style={styles.fontColor}>{item?.title}</Text>
                <Text numberOfLines={1} ellipsizeMode={item.title} style={{ ...styles.fontColor, color: colors.textSecondary, }}>{item?.artist}</Text>
            </View>}
        </TouchableOpacity>
    )
}

export default SongCard

const styles = StyleSheet.create({
    fontColor: {
        color: colors.textPrimary,
        fontSize: 16,
        fontFamily: GetFontFamily.Heavy,
    }
})