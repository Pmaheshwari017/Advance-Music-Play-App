import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const CounterApp = () => {
    const [counter, setCounter] = useState(0);
    const increaseCount = () => {
        if (counter >= 10) return
        setCounter(counter + 1)
    }
    const decreaseCount = () => {
        if (counter <= 0) return
        setCounter(counter - 1)

    }
    return (
        <View style={{ flex: 1 }}>
            <Text>{counter}</Text>

            <TouchableOpacity onPress={increaseCount}>
                <Text>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={decreaseCount}>
                <Text>Decrease</Text>
            </TouchableOpacity>

        </View>
    )
}

export default CounterApp

const styles = StyleSheet.create({})