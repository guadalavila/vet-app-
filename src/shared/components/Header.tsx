import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';
import { typography } from '../utils/typography';

interface IHeaderProps {
    title: string;
    buttonBack?: boolean;
    buttonRight?: boolean;
    iconRight?: string;
    onPressRight?: () => void;
}

const Header = ({ title, buttonBack, buttonRight, iconRight, onPressRight }: IHeaderProps) => {
    const { themeApp } = useContext(ThemeContext);
    const navigation = useNavigation();
    return (
        <View style={[styles.header, { backgroundColor: themeApp.colors.background }]}>
            {buttonBack ? (
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
                    <Text>-</Text>
                </TouchableOpacity>
            ) : (
                <View style={styles.button} />
            )}
            <Text style={[styles.title, { color: themeApp.colors.text }]}>{title}</Text>
            {buttonRight && iconRight && onPressRight ? (
                <TouchableOpacity style={styles.btnRight} activeOpacity={0.7} onPress={onPressRight}>
                    <Text>ds</Text>
                </TouchableOpacity>
            ) : (
                <View style={[styles.button]} />
            )}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        padding: 4,
        paddingVertical: 16,
        flexDirection: 'row',
    },
    title: {
        textAlign: 'center',
        fontSize: typography.size.M,
        fontWeight: 'bold',
        flex: 2,
    },
    button: {
        flex: 1,
    },
    btnRight: {
        flex: 1,
        alignItems: 'flex-end',
    },
});
