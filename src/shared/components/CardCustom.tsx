import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../utils/colors';
import { size } from '../utils/size';
import { GlobalStyles } from '../utils/styles';
import CustomText from './CustomText';
import { typography } from '../utils/typography';

interface ICardCustomProps {
    title: string;
    value: string;
    valueExtra?: string;
    childExtra?: React.ReactNode;
}

const CardCustom = ({ title, value, valueExtra, childExtra }: ICardCustomProps) => {
    return (
        <View style={styles.container}>
            <View style={GlobalStyles.rowBetween}>
                <CustomText style={styles.title}>{title}</CustomText>
                {childExtra}
            </View>
            <CustomText style={[styles.value]}>
                {value}
                <CustomText style={styles.valueExtra}>{valueExtra}</CustomText>
            </CustomText>
        </View>
    );
};

export default CardCustom;

const styles = StyleSheet.create({
    container: {
        width: '30%',
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
        marginVertical: size.S,
        color: colors.light.white,
        fontSize: typography.size.M,
        fontWeight: 'bold',
    },
    valueExtra: {
        fontSize: typography.size.S,
        color: colors.light.greySecondary,
    },
});
