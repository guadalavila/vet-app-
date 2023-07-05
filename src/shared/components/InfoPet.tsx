import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GlobalStyles } from '../utils/styles';
import CustomText from './CustomText';
import { size } from '../utils/size';
import { typography } from '../utils/typography';

interface IInfoPetProps {
    label: string;
    info: string;
}
const InfoPet = ({ label, info }: IInfoPetProps) => {
    return (
        <View style={[GlobalStyles.rowBetween, styles.container]}>
            <CustomText style={styles.label}>{label}:</CustomText>
            <CustomText>{info}</CustomText>
        </View>
    );
};

export default InfoPet;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: size.XXL,
        marginVertical: size.L,
    },
    label: {
        fontWeight: 'bold',
        fontSize: typography.size.S,
    },
});
