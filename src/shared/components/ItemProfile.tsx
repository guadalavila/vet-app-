import React from 'react';
import { StyleSheet, View } from 'react-native';
import { size } from '../utils/size';
import { typography } from '../utils/typography';
import CustomText from './CustomText';
import Separator from './Separator';

interface IItemProfile {
    title: string;
    data: string;
}

const ItemProfile = ({ title, data }: IItemProfile) => {
    return (
        <View style={styles.info}>
            <CustomText style={styles.title}>{title}</CustomText>
            <CustomText style={styles.margin}>{data}</CustomText>
            <Separator />
        </View>
    );
};

export default ItemProfile;

const styles = StyleSheet.create({
    info: {
        marginHorizontal: size.XL,
        marginVertical: size.M,
    },
    margin: {
        marginVertical: size.XS,
    },
    title: {
        fontWeight: '500',
        fontSize: typography.size.S,
    },
});