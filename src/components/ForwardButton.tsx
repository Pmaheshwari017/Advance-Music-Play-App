import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Feather from "react-native-vector-icons/Feather";

import React from 'react'
import { colors } from '../constant/Color';

const ForwardButton = () => {
    return (
        <TouchableOpacity>
            <Feather name="skip-forward" size={30} color={colors.iconPrimary} />
        </TouchableOpacity>
    )
}

export default ForwardButton

const styles = StyleSheet.create({})