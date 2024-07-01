import { StyleProp, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withRepeat,
    withTiming,
} from 'react-native-reanimated';

const MoveingTextHook = ({ text, animationThreshold, style }: { text: any, animationThreshold: any, style: StyleProp }) => {
    const translateX = useSharedValue(0);
    const shouldAnimated = text.length >= animationThreshold;
    const textWidth = text.length * 3;
    useEffect(() => {
        if (!shouldAnimated) return;
        translateX.value = withDelay(3000, withRepeat(
            withTiming(
                -textWidth, {
                duration: 5000,
                easing: Easing.linear
            }),
            -1, //infinite time
            true // should reverse 
        ));
    }, [translateX, text, animationThreshold, textWidth]);

    const AnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
        };
    });
    return (
        <Animated.Text numberOfLines={1} style={[AnimatedStyle, style, shouldAnimated]}>
            <Text>{text}</Text>
        </Animated.Text>
    );
};

export default MoveingTextHook;

const styles = StyleSheet.create({});
