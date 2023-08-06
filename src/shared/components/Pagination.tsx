import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

type PaginationItemProps = {
    index: number,
    length: number,
    animation: Animated.SharedValue<number>,
    isRotate?: boolean,
};

const Pagination = memo<PaginationItemProps>(function PaginationRectangleItem({ animation, index, length }) {
    const width = 20;
    const animStyle = useAnimatedStyle(() => {
        let inputRange = [index - 1, index, index + 1];
        let outputRange = [width / 2, width, width / 2];

        if (index === 0 && animation?.value > length - 1) {
            inputRange = [length - 1, length, length + 1];
            outputRange = [width / 2, width, width / 2];
        }

        return {
            width: interpolate(animation?.value, inputRange, outputRange, Extrapolate.CLAMP),
        };
    }, [animation, index, length]);
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.item, animStyle, ,]} />
        </View>
    );
});

export default Pagination;

const styles = StyleSheet.create({
    container: {
        height: 4,
        marginHorizontal: 2,
    },
    item: {
        borderRadius: 50,
        backgroundColor: '#ffffff',
        flex: 1,
    },
});
