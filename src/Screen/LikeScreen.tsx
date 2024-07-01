
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { colors } from '../constant/Color'
import { GetFontFamily } from '../constant/FontFamily'
import SongCard from '../components/songCard'
import CardWithCaregory from '../components/cardWithCaregory'
import FloatingPlayer from '../components/FloatingPlayer'

const LikeScreen = () => {
    return (
        <View style={styles.container}>
            <Header screenName='Fav' />
            {/* <Text style={styles.headerText}>Liked Song</Text> */}
            <View style={{ flex: 1 }}>
                <CardWithCaregory data={[1, 2, 3, 45, 5, 67, 4, 5, 6, 7, 3]} category='Liked Song' numRow={2} hori={false} customcContainerStyle={{ width: '49%' }}
                    imageStyle={{ width: 180, height: 180, marginLeft: 3 }} />
            </View>
            <FloatingPlayer />
        </View>
    )
}

export default LikeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    headerText: {
        fontSize: 24,
        color: colors.textPrimary,
        fontFamily: GetFontFamily.Medium,
        marginHorizontal: 14
    }
})