import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

import React from 'react'
import { colors } from '../constant/Color';

const PlayButton = () => {
    return (
        <TouchableOpacity>
            <FontAwesome6 name="grip-lines-vertical" size={30} color={colors.iconPrimary} />

        </TouchableOpacity>
    )
}

export default PlayButton

const styles = StyleSheet.create({})