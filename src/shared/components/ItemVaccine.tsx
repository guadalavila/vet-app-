import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Vaccine } from '../../models/Vaccine';
import CustomText from './CustomText';
import { size } from '../utils/size';
import { typography } from '../utils/typography';
import { colors } from '../utils/colors';
import { GlobalStyles } from '../utils/styles';

interface IItemVaccineProps {
    vaccine: Vaccine;
}

const ItemVaccine = ({ vaccine }: IItemVaccineProps) => {
    return (
        <View style={[styles.container, GlobalStyles.row]}>
            <View style={styles.containerIcon}>
                <Image style={styles.icon} source={require('../../../assets/icon/vaccine.png')} />
            </View>
            <View>
                <CustomText style={[styles.name]}>
                    {new Date(vaccine.date).toLocaleString('en-GB', {
                        hour12: false,
                    })}
                </CustomText>
                <CustomText style={[styles.name]}>{vaccine.name}</CustomText>
                <CustomText style={[styles.type]}>{vaccine.type}</CustomText>
            </View>
        </View>
    );
};

export default ItemVaccine;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: size.XL,
        paddingVertical: size.M,
        borderBottomColor: colors.light.secondary,
        borderBottomWidth: 1,
    },
    name: {
        fontSize: typography.size.S,
        fontWeight: '600',
    },
    type: {
        marginVertical: size.M,
    },
    containerIcon: {
        backgroundColor: colors.light.primary,
        borderRadius: 30,
        alignSelf: 'center',
        marginRight: size.XXL,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 27,
        height: 27,
    },
});
