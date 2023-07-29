import React, { useContext } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Vaccine } from '../../models/Vaccine';
import CustomText from './CustomText';
import { size } from '../utils/size';
import { typography } from '../utils/typography';
import { colors } from '../utils/colors';
import { GlobalStyles } from '../utils/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../../contexts/ThemeContext';

interface IItemVaccineProps {
    vaccine: Vaccine;
    onPress: () => void;
}

const ItemVaccine = ({ vaccine, onPress }: IItemVaccineProps) => {
    const { theme } = useContext(ThemeContext);
    return (
        <View style={[styles.container, GlobalStyles.row]}>
            <View style={styles.containerIcon}>
                <Image style={styles.icon} source={require('../../../assets/icon/vaccine.png')} />
            </View>
            <View style={styles.containerInfo}>
                <CustomText style={[styles.name]}>
                    {new Date(vaccine.date).toLocaleString('en-GB', {
                        hour12: false,
                    })}
                </CustomText>
                <CustomText style={[styles.name]}>{vaccine.name}</CustomText>
                <CustomText style={[styles.type]}>Tipo: {vaccine.type}</CustomText>
                {vaccine.brand && <CustomText style={[styles.type]}>Marca: {vaccine.brand}</CustomText>}
                {vaccine.details && <CustomText style={[styles.type]}>Detalle: {vaccine.details}</CustomText>}
            </View>
            <TouchableOpacity style={styles.containerButton} activeOpacity={0.7} onPress={onPress}>
                <Icon size={25} name='pencil' color={theme === 'dark' ? colors.light.white : colors.light.primary} />
            </TouchableOpacity>
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
    containerInfo: {
        width: '78%',
        paddingRight: size.S,
    },
    name: {
        fontSize: typography.size.S,
        fontWeight: '600',
        marginVertical: size.S,
    },
    type: {
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
    icon: {
        width: 27,
        height: 27,
    },
    containerButton: {
        alignSelf: 'center',
    },
});
