import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Feather from "react-native-vector-icons/Feather";
import { colors } from '../constant/Color'
const BackwardButton = () => {
    return (
        <TouchableOpacity onPress={() => { console.log("pre") }}>
            <Feather name="skip-back" size={30} color={colors.iconPrimary} />
        </TouchableOpacity>
    )
}

export default BackwardButton

const styles = StyleSheet.create({})