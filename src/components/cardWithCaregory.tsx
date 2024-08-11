import { FlatList, StyleProp, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SongCard from './songCard'
import { colors } from '../constant/Color'
import { GetFontFamily } from '../constant/FontFamily'
import TrackPlayer from 'react-native-track-player'
interface CardWithCategoryProps {
    data?: Array<any>;
    category?: string;
    numRow?: number;
    hori?: boolean;
    customContainerStyle?: StyleProp<any>;
    imageStyle?: StyleProp<any>;
    getSongPlayed: any
}

const CardWithCaregory: React.FC<Partial<CardWithCategoryProps>> = ({ data, category, numRow, hori = true, customContainerStyle, imageStyle, getSongPlayed }) => {
    const handlePlayTrack = async (selectedSong: any, Songs: any = data) => {
        if (!selectedSong || !Songs) {
            console.error("Invalid input: selectedSong or Songs is undefined or null");
            return;
        }
        const trackIndex = Songs.findIndex((track: any) => {
            return track.url === selectedSong.url
        })
        getSongPlayed(selectedSong, trackIndex)
        if (trackIndex === -1) {
            console.error("Track not found in the list");
        } else {
            console.log("Track index:", trackIndex);
        }
        const beforeTrack = Songs.slice(0, trackIndex);
        const afterTrack = Songs.slice(trackIndex + 1);
        await TrackPlayer.reset()
        // await TrackPlayer.add(selectedSong)
        // await TrackPlayer.add(afterTrack)
        // await TrackPlayer.add(beforeTrack)
        // await TrackPlayer.play()

    }
    return (
        <View>
            <Text numberOfLines={1} style={[styles.headerText, { marginBottom: customContainerStyle ? 20 : 0 }]}>
                {category}
            </Text>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <SongCard
                        item={item}
                        customContainerStyle={customContainerStyle}
                        imageStyle={imageStyle}
                        handlePlay={(selectedSong: any) => {
                            handlePlayTrack(selectedSong);
                            console.log("🚀 ~ CardWithCategory ~ selectedSong:", selectedSong);
                        }}
                    />
                )}
                horizontal={hori}
                contentContainerStyle={{ padding: customContainerStyle ? 10 : 15, paddingBottom: customContainerStyle ? 25 : 0 }}
                numColumns={numRow}
            />
        </View>
    )
}

export default CardWithCaregory

const styles = StyleSheet.create({
    headerText: {
        fontSize: 24,
        color: colors.textPrimary,
        fontFamily: GetFontFamily.Medium,
        marginHorizontal: 14
    }
})