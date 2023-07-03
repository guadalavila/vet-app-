import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../utils/colors';

interface IAvatarProps {
    children: React.ReactNode;
    background?: string;
    size?: number;
}
const Avatar = ({ children, background = colors.light.primary, size = 100 }: IAvatarProps) => {
    return (
        <View
            style={[styles.container, { backgroundColor: background, width: size, height: size, borderRadius: size }]}>
            {children}
        </View>
    );
};

export default Avatar;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
});
