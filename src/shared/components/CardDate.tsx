import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import { formatDate } from '../utils/date';
import { size } from '../utils/size';
import { colors } from '../utils/colors';

interface ICardDateProps {
    label: string;
    date: Date;
    selectedDate: Date;
    isSelected: boolean;
    onSelected: () => void;
}

const CardDate = ({ label, date, selectedDate, onSelected, isSelected }: ICardDateProps) => {
    return (
        <TouchableOpacity
            onPress={onSelected}
            activeOpacity={0.7}
            style={[styles.button, isSelected ? styles.buttonSelected : styles.buttonNoSelected]}>
            <CustomText style={styles.text}>{label}</CustomText>
            <CustomText>{formatDate(date)}</CustomText>
        </TouchableOpacity>
    );
};

export default CardDate;

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingHorizontal: size.XL,
        marginVertical: size.L,
        marginHorizontal: size.M,
    },
    buttonSelected: {
        backgroundColor: colors.light.primary,
    },
    buttonNoSelected: {
        backgroundColor: colors.light.greyDark,
    },
    text: {
        textAlign: 'center',
        marginBottom: size.M,
    },
});
