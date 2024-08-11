import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../constant/Color'
import Header from '../components/Header'
import SongCard from '../components/songCard'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import { GetFontFamily } from '../constant/FontFamily'
import FloatingPlayer from '../components/FloatingPlayer'
import PlayerProgressBar from '../components/PlayerProgressBar'
import PlayStation from '../components/PlayStation'
import { RouteProp, useRoute } from '@react-navigation/native'

const PlayScreen = () => {
    const route: any = useRoute();
    const items: any = route?.params
    console.log("🚀 ~ PlayScreen ~ items:", items)
    //MaterialCommunityIcons  //shuffl
    const [fav, setFav] = useState(false)
    const [mute, setMute] = useState(false)
    const [shuffle, setShuffle] = useState(false)
    const [repeat, setRepeat] = useState(false)
    const coveriImage = 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/001/697/325x325/baby-pala-chrome-remix-1718236888-JxaHysSCwU.jpg';
    return (
        <View style={{ flex: 1, backgroundColor: colors.background, }}>
            <Header screenName='Play' />
            <View style={{ height: 370, justifyContent: 'center', alignItems: 'center', }}>

                <SongCard item={items.item} CoverImage={coveriImage} coverStyle={{ justifyContent: 'center', alignItem: 'center', marginLeft: 35 }} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', height: 50, marginBottom: 10, }}>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={[styles.headerText, {}]}>{items.item.title}</Text>
                    <Text style={[styles.headerText, { color: colors.textSecondary, fontSize: 16 }]}>{items.item.artist}</Text>
                </View>
                <TouchableOpacity onPress={() => { setFav(!fav) }} activeOpacity={.8} style={{ position: 'absolute', right: '5%', bottom: 10 }}>
                    <MaterialCommunityIcons name={!fav ? "cards-heart-outline" : "cards-heart"} size={28} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', marginTop: '8%', justifyContent: 'space-between', alignItems: 'center', padding: 10, paddingHorizontal: 20, }}>
                <TouchableOpacity onPress={() => { setMute(!mute) }} activeOpacity={.8}>
                    <Feather name={mute ? "volume-x" : "volume-2"} size={28} color="white" />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', flexDirection: 'row', gap: 20 }}>
                    <TouchableOpacity onPress={() => { setShuffle(!shuffle) }} activeOpacity={.8}>
                        <MaterialCommunityIcons name={shuffle ? "shuffle" : "shuffle-disabled"} size={28} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setRepeat(!repeat) }} activeOpacity={.8}>
                        <MaterialCommunityIcons name={repeat ? "repeat" : 'repeat-once'} size={28} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1, marginTop: '10%', marginHorizontal: 10, }}>

                <PlayerProgressBar />
                <View style={{ marginTop: '18%', alignSelf: 'center', marginHorizontal: 20 }}>

                    <PlayStation playScreen={true} />
                </View>
            </View>

        </View>
    )
}

export default PlayScreen

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        color: colors.textPrimary,
        fontFamily: GetFontFamily.Medium,
        textAlign: 'center',
        alignSelf: 'center'
    }
})