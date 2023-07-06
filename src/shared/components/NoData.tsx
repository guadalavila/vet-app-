import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomText from './CustomText';
import { typography } from '../utils/typography';
import { colors } from '../utils/colors';
import { GlobalStyles } from '../utils/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { size } from '../utils/size';

interface INoDataProps {
    title: string;
}

const NoData = ({ title }: INoDataProps) => {
    return (
        <View style={GlobalStyles.flexCenter}>
            <CustomText style={styles.title}>{title}</CustomText>
            <View style={styles.icon}>
                <Icon name='document-text' size={80} color={colors.light.greyDark} />
            </View>
        </View>
    );
};

export default NoData;

const styles = StyleSheet.create({
    title: {
        fontSize: typography.size.L,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignSelf: 'center',
        color: colors.light.greyDark,
        textAlign: 'center',
    },
    icon: {
        alignSelf: 'center',
        marginTop: size.XXL,
    },
});
