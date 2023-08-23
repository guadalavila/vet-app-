import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { typography } from '~shared/utils/typography';
import { size } from '~shared/utils/size';
import CustomText from './CustomText';
import { GlobalStyles } from '~shared/utils/styles';
import { colors } from '~shared/utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { LastVisit } from '~models/Visit';
import { getSpeciePet } from '~shared/utils/helpers';

interface IItemLastVisitProps {
    lastVisit: LastVisit;
    onPress: () => void;
}

const ItemLastVisit = ({ onPress, lastVisit }: IItemLastVisitProps) => {
    return (
        <TouchableOpacity style={[styles.container, GlobalStyles.row]} activeOpacity={0.7} onPress={onPress}>
            <View style={styles.containerIcon}>
                <Icon name='paw-outline' size={30} color={colors.light.white} />
            </View>
            <View>
                <CustomText style={[styles.name]}>{lastVisit.pet.name}</CustomText>
                <CustomText style={[styles.type]}>{getSpeciePet(lastVisit.pet.specie)}</CustomText>
                <CustomText>
                    {new Date(lastVisit.date).toLocaleString('en-GB', {
                        hour12: false,
                    })}
                </CustomText>
            </View>
        </TouchableOpacity>
    );
};

export default ItemLastVisit;

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
        fontWeight: '500',
        marginVertical: size.S,
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
});
