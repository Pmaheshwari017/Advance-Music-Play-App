import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SongCard from './songCard'
import { colors } from '../constant/Color'
import { GetFontFamily } from '../constant/FontFamily'

const CardWithCaregory = ({ data, category }: { data: Array<any>, category: string }) => {
    return (
        <View>
            <Text style={styles.headerText}>{category}</Text>
            <FlatList
                data={data}
                renderItem={SongCard}
                horizontal
                ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
                contentContainerStyle={{ padding: 12 }}
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