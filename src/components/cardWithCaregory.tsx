import { FlatList, StyleProp, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SongCard from './songCard'
import { colors } from '../constant/Color'
import { GetFontFamily } from '../constant/FontFamily'

const CardWithCaregory = ({ data, category, numRow, hori = true, customcContainerStyle, imageStyle }: { data: Array<any>, category: string, numRow?: number, hori?: boolean, customcContainerStyle?: StyleProp<any>, imageStyle?: StyleProp<any> }) => {
    return (
        <View>
            <Text numberOfLines={1} style={{ ...styles.headerText, marginBottom: customcContainerStyle ? 20 : 0 }}>{category}</Text>
            <FlatList
                data={data}
                // ListHeaderComponent={() => {
                //     // return customcContainerStyle ? <Text numberOfLines={1} style={{ ...styles.headerText, marginBottom: customcContainerStyle ? 20 : 0 }}>{category}</Text> : null
                // }}
                renderItem={() => {
                    return <SongCard customcContainerStyle={customcContainerStyle} imageStyle={imageStyle} />
                }}
                horizontal={hori}
                // ItemSeparatorComponent={() => <View style={{}} />}
                contentContainerStyle={{ padding: customcContainerStyle ? 10 : 15, paddingBottom: customcContainerStyle ? 25 : 0 }}

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