import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../../contexts/ThemeContext';
import { typography } from '../utils/typography';

interface IHeaderProps {
    title: string;
}

const Header = ({ title }: IHeaderProps) => {
    const { themeApp } = useContext(ThemeContext);
    return (
        <View style={[styles.header]}>
            <Text style={[styles.title, { color: themeApp.colors.text }]}>{title}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        height: 30,
        padding: 4,
        margin: 4,
    },
    title: {
        textAlign: 'center',
        fontSize: typography.size.M,
        fontWeight: 'bold',
    },
});
