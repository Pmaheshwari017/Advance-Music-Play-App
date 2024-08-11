import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../src/constant/Color'
// import {}
import Icon from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Header from '../components/Header'
import { GetFontFamily } from '../constant/FontFamily'
import SongCard from '../components/songCard'
import CardWithCaregory from '../components/cardWithCaregory'
import FloatingPlayer from '../components/FloatingPlayer'
import { MusicData } from '../data/data'
import TrackPlayer, { State } from 'react-native-track-player'

const Home = () => {
    const [selectedSongPlay, setSelectedSongPlay] = useState();
    console.log("🚀 ~ Home ~ selectedSongPlay:", selectedSongPlay)
    const getInitialTrack = async () => {
        await TrackPlayer.setupPlayer()
    }
    useEffect(() => {
        getInitialTrack()

    }, [])
    const getPayState = async () => {
        const state = await TrackPlayer.getState();
        if (state === State.Playing) {
            console.log('The player is playing');
        } else {
            console.log('The player is not playing');
        }
    }
    useEffect(() => {
        getPayState()
    })
    const handlePlayTrack = async (selectedSong: any, Songs: any) => {
        console.log("🚀 ~ handlePlayTrack ~ selectedSong:", selectedSong)
        console.log("🚀 ~ handlePlayTrack ~ Songs:", Songs)
        if (!selectedSong || !Songs) {
            console.error("Invalid input: selectedSong or Songs is undefined or null");
            return;
        }
        const trackIndex = Songs.findIndex((track: any) => {
            return track.url === selectedSong.url
        })
        console.log("🚀 ~ trackIndex ~ trackIndex:", trackIndex)
        if (trackIndex === -1) {
            console.error("Track not found in the list");
        } else {
            console.log("Track index:", trackIndex);
        }
        setSelectedSongPlay(selectedSong)
        const beforeTrack = Songs.slice(0, trackIndex);
        console.log("🚀 ~ handlePlayTrack ~ beforeTrack:", beforeTrack)
        const afterTrack = Songs.slice(trackIndex + 1);
        await TrackPlayer.reset()
        await TrackPlayer.reset()
        await TrackPlayer.add(beforeTrack)
        await TrackPlayer.add(selectedSong)
        await TrackPlayer.add(afterTrack)
        await TrackPlayer.play()

    }
    return (
        <View style={styles.container}>
            <Header screenName='Home' />
            {/* <CardWithCaregory data={[1, 2, 4, 5, 6]} category={'Recommanded for you'} /> */}
            <FlatList
                data={MusicData}
                renderItem={(item,) => {
                    return <CardWithCaregory
                        data={item.item.songs}
                        category={item.item.title}
                        getSongPlayed={(selectedSong: any, trackIndex: any) => {
                            console.log("🚀 ~ Home ~ selectedSong, trackIndex:", selectedSong, trackIndex)
                            handlePlayTrack(selectedSong, item.item.songs)

                        }}

                    />
                }}
                ItemSeparatorComponent={() => <View style={{ marginBottom: 15 }} />}
            />

            {selectedSongPlay != undefined || null ? <FloatingPlayer SelectionedSong={selectedSongPlay} /> : null}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },

})