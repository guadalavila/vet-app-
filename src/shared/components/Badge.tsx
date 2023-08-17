import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../utils/colors';
import { size } from '../utils/size';
import CustomText from './CustomText';

interface IBadgeProps {
    label: string;
    color?: string;
}
const Badge = ({ label, color = colors.light.primary }: IBadgeProps) => {
    return (
        <View testID='container-text' style={[styles.container, { backgroundColor: color }]}>
            <CustomText style={styles.label}>{label}</CustomText>
        </View>
    );
};

export default Badge;

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        margin: size.M,
        padding: size.M,
    },
    label: {
        fontWeight: '600',
        color: colors.light.blackSecondary,
    },
});
