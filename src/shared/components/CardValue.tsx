import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../utils/colors';
import { size } from '../utils/size';
import { GlobalStyles } from '../utils/styles';
import CustomText from './CustomText';
import Icon from 'react-native-vector-icons/Ionicons';
import { typography } from '../utils/typography';

interface ICardValueProps {
    icon: string;
    title: string;
    value: string;
    valueExtra?: string;
}

const CardValue = ({ icon, title, value, valueExtra }: ICardValueProps) => {
    return (
        <View style={styles.container}>
            <View style={GlobalStyles.rowBetween}>
                <CustomText style={styles.title}>{title}</CustomText>
                <Icon name={icon} size={20} color={colors.light.white} />
            </View>
            <CustomText style={[styles.value]}>
                {value}
                <CustomText style={styles.valueExtra}>{valueExtra}</CustomText>
            </CustomText>
        </View>
    );
};

export default CardValue;

const styles = StyleSheet.create({
    container: {
        width: '35%',
        backgroundColor: colors.light.secondary,
        borderRadius: 10,
        padding: size.L,
        margin: size.S,
    },
    title: {
        fontWeight: '600',
        color: colors.light.grey,
    },
    value: {
        marginVertical: size.L,
        color: colors.light.white,
        fontSize: typography.size.L,
    },
    valueExtra: {
        fontSize: typography.size.S,
        color: colors.light.greySecondary,
    },
});
