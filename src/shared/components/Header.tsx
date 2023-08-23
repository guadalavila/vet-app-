import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemeContext } from '~contexts/ThemeContext';
import { typography } from '~shared/utils/typography';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~shared/utils/colors';
import CustomText from './CustomText';

interface IHeaderProps {
    title: string;
    buttonBack?: boolean;
    buttonRight?: boolean;
    iconRight?: string;
    onPressRight?: () => void;
    onPressLeft?: () => void;
}

const Header = ({ title, buttonBack, buttonRight, iconRight, onPressRight, onPressLeft }: IHeaderProps) => {
    const { themeApp } = useContext(ThemeContext);
    const navigation = useNavigation();
    return (
        <View style={[styles.header, { backgroundColor: themeApp.colors.background }]}>
            {buttonBack ? (
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={() => {
                        onPressLeft ? onPressLeft() : navigation.goBack();
                    }}>
                    <Icon name='arrow-back-outline' size={28} color={colors.dark.primary} />
                </TouchableOpacity>
            ) : (
                <View style={styles.button} />
            )}
            <CustomText style={[styles.title]}>{title}</CustomText>
            {buttonRight && iconRight && onPressRight ? (
                <TouchableOpacity style={styles.btnRight} activeOpacity={0.7} onPress={onPressRight}>
                    <Icon name={iconRight} size={28} color={colors.dark.primary} />
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
