import { Image, StyleProp, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constant/Color'
import { GetFontFamily } from '../constant/FontFamily'

const SongCard = ({ customcContainerStyle, imageStyle }: { customcContainerStyle?: StyleProp<any>, imageStyle?: StyleProp<any> }) => {
    const imageURI = 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/538/325x325/1696583182_QUThTOGvco_Final.jpg'
    return (

        <TouchableOpacity style={{ width: 255, height: customcContainerStyle ? 265 : 300, marginHorizontal: 1, ...customcContainerStyle }}>
            <Image source={{ uri: imageURI }} style={{ width: 230, height: 230, borderRadius: 10, marginVertical: 2, ...imageStyle }} />
            <View style={{ gap: 4, alignItems: 'center', flex: 1 }}>
                <Text style={styles.fontColor}>Waveffs</Text>
                <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ ...styles.fontColor, color: colors.textSecondary }}>Comma, Dee</Text>
            </View>
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