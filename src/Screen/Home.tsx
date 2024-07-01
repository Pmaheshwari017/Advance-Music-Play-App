import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../src/constant/Color'
// import {}
import Icon from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Header from '../components/Header'
import { GetFontFamily } from '../constant/FontFamily'
import SongCard from '../components/songCard'
import CardWithCaregory from '../components/cardWithCaregory'
import FloatingPlayer from '../components/FloatingPlayer'

const Home = () => {
    return (
        <View style={styles.container}>
            <Header screenName='Home' />
            {/* <CardWithCaregory data={[1, 2, 4, 5, 6]} category={'Recommanded for you'} /> */}
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={() => {
                    return <CardWithCaregory data={[1, 2, 4, 5, 6]} category={'Recommanded for you'} />
                }}
                ItemSeparatorComponent={() => <View style={{ marginBottom: 15 }} />}
            />

            <FloatingPlayer />
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