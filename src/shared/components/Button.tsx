import React from 'react';
import { StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import CustomText from './CustomText';
import { colors } from '../utils/colors';
import { size } from '../utils/size';
import { typography } from '../utils/typography';

interface IButtonProps {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle> | undefined;
    outlined?: boolean;
    secondary?: boolean;
}

const Button = ({ title, onPress, style = {}, outlined = false, secondary = false }: IButtonProps) => {
    return (
        <TouchableOpacity
            style={[!outlined ? styles.button : styles.outlined, secondary && styles.secondary, style]}
            activeOpacity={0.7}
            onPress={onPress}>
            <CustomText style={[styles.text]}>{title}</CustomText>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        marginHorizontal: size.XXL,
        paddingHorizontal: size.XL,
        paddingVertical: size.XXL,
        marginVertical: size.XL,
        backgroundColor: colors.light.primary,
    },
    secondary: {
        borderRadius: 10,
        marginHorizontal: size.XXL,
        paddingHorizontal: size.XL,
        paddingVertical: size.XXL,
        marginVertical: size.XL,
        backgroundColor: colors.light.greyDark,
    },
    outlined: {
        marginHorizontal: size.XXL,
        paddingHorizontal: size.XL,
        paddingVertical: size.XXL,
        marginVertical: size.XL,
    },

    text: {
        fontWeight: '700',
        fontSize: typography.size.S,
        textAlign: 'center',
        color: colors.light.white,
    },
});
