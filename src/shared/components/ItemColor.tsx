import React from 'react';
import { StyleSheet, View } from 'react-native';

interface IItemColorProps {
    size?: number;
    color: string;
}

const ItemColor = ({ size = 30, color }: IItemColorProps) => {
    return (
        <View
            testID='ItemColor'
            style={[styles.container, { width: size, height: size, borderRadius: size, backgroundColor: color }]}
        />
    );
};

export default ItemColor;

const styles = StyleSheet.create({
    container: {},
});
