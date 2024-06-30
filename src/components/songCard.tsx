import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constant/Color'
import { GetFontFamily } from '../constant/FontFamily'

const SongCard = () => {
    const imageURI = 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/538/325x325/1696583182_QUThTOGvco_Final.jpg'
    return (
        <TouchableOpacity style={{ width: 255, height: 300, marginVertical: 20, marginHorizontal: 3, }}>
            <Image source={{ uri: imageURI }} style={{ width: 250, height: 250, borderRadius: 10, marginVertical: 2, }} />
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