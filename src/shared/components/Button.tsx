import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';

interface IButtonProps {
    title: string;
    onPress: () => void;
}

const Button = ({ title, onPress }: IButtonProps) => {
    const {
        themeApp: { colors },
    } = useContext(ThemeContext);

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.primary }]}
            activeOpacity={0.7}
            onPress={onPress}>
            <Text style={[styles.text, { color: colors.white }]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        paddingVertical: 14,
        marginVertical: 4,
    },
    text: {
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'center',
    },
});
