import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { typography } from '../utils/typography';
import { size } from '../utils/size';
import CustomText from './CustomText';
import { GlobalStyles } from '../utils/styles';
import { colors } from '../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { LastVisits } from '../../models/Visit';
import { getPetType } from '../utils/helpers';

interface IItemLastVisitProps {
    lastVisit: LastVisits;
    onPress: () => void;
}

const ItemLastVisit = ({ onPress, lastVisit: { visit, pet } }: IItemLastVisitProps) => {
    return (
        <TouchableOpacity style={[styles.container, GlobalStyles.row]} activeOpacity={0.7} onPress={onPress}>
            <View style={styles.containerIcon}>
                <Icon name='paw-outline' size={30} color={colors.light.white} />
            </View>
            <View>
                <CustomText style={[styles.name]}>{pet.name}</CustomText>
                <CustomText style={[styles.type]}>{getPetType(pet.type)}</CustomText>
                <CustomText>
                    {new Date(visit.date).toLocaleString('en-GB', {
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