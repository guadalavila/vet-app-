import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { size } from '../utils/size';
import CustomText from './CustomText';
import { colors } from '../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';

interface IOptionProps {
    label: string;
    icon: string;
    onPress: () => void;
}

const Option = ({ label, icon, onPress }: IOptionProps) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={[styles.container]} onPress={onPress}>
            <Icon name={icon} size={24} color={colors.light.greyDark} />
            <CustomText style={styles.label}>{label}</CustomText>
        </TouchableOpacity>
    );
};

export default Option;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: size.XXL,
        marginVertical: size.M,
        paddingVertical: size.M,
        borderBottomWidth: 1,
        borderBottomColor: colors.light.primary,
        flexDirection: 'row',
    },
    label: {
        fontWeight: '600',
        marginLeft: size.XXL,
        alignSelf: 'center',
    },
});
