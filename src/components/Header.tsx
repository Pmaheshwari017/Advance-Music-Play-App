import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const Header = ({ screenName }: { screenName: string }) => {
    return (
        <View style={styles.header}>
            {screenName == 'Home' &&
                <>
                    <TouchableOpacity>
                        <Icon name="grip-lines" size={30} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <AntDesign name="search1" size={30} color="white" />
                    </TouchableOpacity>
                </>
            }
            {screenName == 'Fav' &&
                <>

                    <TouchableOpacity style={{ transform: [{ scaleX: -1 }], }}>
                        <AntDesign name="arrowleft" size={30} color="white" style={styles.flippedIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SimpleLineIcons name="equalizer" size={30} color="white" />
                    </TouchableOpacity>
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
})