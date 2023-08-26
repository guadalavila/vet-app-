import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from './Card';
import CustomText from './CustomText';
import { Client } from '~models/Client';
import Icon from 'react-native-vector-icons/Ionicons';
import { size } from '~shared/utils/size';
import { typography } from '~shared/utils/typography';
import { colors } from '~shared/utils/colors';
import { GlobalStyles } from '~shared/utils/styles';

interface IClientDetailProps {
    client: Client;
}

const ClientDetail = ({ client }: IClientDetailProps) => {
    const getCodeName = () => client.name.charAt(0).concat(client.lastName.charAt(0)).toUpperCase();
    return (
        <Card testID='ClientCard'>
            <View style={styles.containerAvatar}>
                <Text style={styles.textAvatar}>{getCodeName()}</Text>
            </View>
            <CustomText testID='nameAndLastName' style={[styles.name]}>
                {client.name} {client.lastName}
            </CustomText>
            <CustomText testID='dni' style={[styles.dni]}>
                DNI {client.dni}
            </CustomText>
            {client.email && client.email.length > 0 && (
                <CustomText testID='email' style={styles.emailText}>
                    {client.email}
                </CustomText>
            )}
            {client.address && client.address.length > 0 && (
                <CustomText testID='address' style={styles.emailText}>
                    {client.address}
                </CustomText>
            )}
            {client.phone && (
                <TouchableOpacity
                    testID='phone-button'
                    style={[GlobalStyles.row, styles.containerPhone]}
                    activeOpacity={0.7}
                    onPress={() => Linking.openURL(`https://api.whatsapp.com/send?phone=${client.phone}`)}>
                    <Icon testID='icon' name='logo-whatsapp' size={24} color={colors.light.whatsapp} />
                    <CustomText testID='phone' style={styles.phone}>
                        {client.phone}
                    </CustomText>
                </TouchableOpacity>
            )}
        </Card>
    );
};

export default ClientDetail;

const styles = StyleSheet.create({
    name: {
        color: colors.light.primary,
        fontSize: typography.size.L,
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: size.XXL,
    },
    dni: {
        fontSize: typography.size.M,
        textAlign: 'center',
        marginVertical: size.L,
    },
    containerPhone: {
        marginVertical: size.XL,
        alignSelf: 'center',
    },
    phone: {
        fontWeight: 'bold',
        marginLeft: size.L,
        alignSelf: 'center',
        fontSize: typography.size.S,
        textDecorationLine: 'underline',
    },
    containerAvatar: {
        backgroundColor: colors.light.primary,
        borderRadius: 100,
        width: 100,
        height: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: size.L,
    },
    textAvatar: {
        fontSize: typography.size.XXXL,
        color: colors.light.white,
        alignSelf: 'center',
    },
    emailText: {
        marginHorizontal: size.L,
        marginBottom: size.XL,
        textAlign: 'center',
    },
});
