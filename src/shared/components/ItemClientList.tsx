import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '~shared/utils/colors';
import { size } from '~shared/utils/size';
import { Client } from '~models/Client';
import { typography } from '~shared/utils/typography';
import { GlobalStyles } from '~shared/utils/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomText from './CustomText';

interface IItemClientListProps {
    client: Client;
    onPress: () => void;
}

const ItemClientList = ({ client, onPress }: IItemClientListProps) => {
    return (
        <TouchableOpacity style={[styles.container, GlobalStyles.row]} activeOpacity={0.7} onPress={onPress}>
            <View style={styles.containerIcon}>
                <Icon name='person-outline' size={30} color={colors.light.white} />
            </View>
            <View>
                <CustomText style={[styles.nameAndLastName]}>
                    {client.name} {client.lastName}
                </CustomText>
                <CustomText style={[styles.dni]}>DNI: {client.dni}</CustomText>
            </View>
        </TouchableOpacity>
    );
};

export default ItemClientList;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: size.XL,
        paddingVertical: size.M,
        borderBottomColor: colors.light.secondary,
        borderBottomWidth: 1,
    },
    nameAndLastName: {
        fontSize: typography.size.S,
        fontWeight: '600',
    },
    dni: {
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
});
