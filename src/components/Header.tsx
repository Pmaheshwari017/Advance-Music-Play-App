import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { colors } from '../constant/Color'
import { GetFontFamily } from '../constant/FontFamily'
import { useNavigation } from '@react-navigation/native'

const Header = ({ screenName }: { screenName: string }) => {
    const navigation: any = useNavigation()
    return (
        <View style={styles.header}>
            {screenName == 'Home' &&
                <>
                    <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                        <Icon name="grip-lines" size={30} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { navigation.navigate('LikeScreen') }}>
                        <AntDesign name="hearto" size={30} color="white" />
                    </TouchableOpacity>
                </>
            }
            {screenName == 'Fav' &&
                <>

                    <TouchableOpacity style={{ transform: [{ scaleX: -1 }], }} onPress={() => { navigation.pop() }}>
                        <AntDesign name="arrowleft" size={30} color="white" style={styles.flippedIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SimpleLineIcons name="equalizer" size={30} color="white" />
                    </TouchableOpacity>
                </>
            }
            {
                screenName == 'Play' &&
                <>
                    <TouchableOpacity style={{ transform: [{ scaleX: -1 }], }} onPress={() => { navigation.pop() }}>
                        <AntDesign name="arrowleft" size={24} color="white" style={styles.flippedIcon} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Playing Now</Text>

                </>
            }
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 20
    },
    flippedIcon: {
        transform: [{ scaleX: -1 }],
    },
    headerText: {
        fontSize: 20,
        color: colors.textPrimary,
        fontFamily: GetFontFamily.Medium,
        textAlign: 'center',
        flex: 1,
        alignSelf: 'center'
    }
})