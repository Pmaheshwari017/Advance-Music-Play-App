import { View, Text, Animated, Easing, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';

const Animate = ({ children, left, leftP, duration }: { children: JSX.Element, left: boolean, leftP: any, duration: number }) => {
    const [leftPosition, setLeftPosition] = useState(new Animated.Value(leftP));

    useEffect(() => {
        left ? mooveLR() : mooveRL();
    }, []);

    const mooveLR = () => {
        Animated.timing(leftPosition, {
            toValue: 100,
            duration, // the duration of the animation
            easing: Easing.linear,
            useNativeDriver: false
        }).start(); // starts this annimation once this method is called
    };

    const mooveRL = () => {
        Animated.timing(leftPosition, {
            toValue: 0,
            duration, // the duration of the animation
            easing: Easing.linear, // the style of animation
            useNativeDriver: false
        }).start(); // starts this annimation once this method is called
    };

    return (
        <Animated.View style={[{ left: leftPosition }]}>{children}</Animated.View>
    );
};

export default Animate;