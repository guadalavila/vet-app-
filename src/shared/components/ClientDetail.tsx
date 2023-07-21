import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from './Card';
import CustomText from './CustomText';
import { Client } from '../../models/Client';
import Icon from 'react-native-vector-icons/Ionicons';
import { size } from '../utils/size';
import { typography } from '../utils/typography';
import { colors } from '../utils/colors';
import { GlobalStyles } from '../utils/styles';

interface IClientDetailProps {
    client: Client;
}

const ClientDetail = ({ client }: IClientDetailProps) => {
    const getCodeName = () => client.name.charAt(0).concat(client.lastName.charAt(0)).toUpperCase();
    return (
        <Card>
            <View style={styles.containerAvatar}>
                <Text style={styles.textAvatar}>{getCodeName()}</Text>
            </View>
            <CustomText style={[styles.name]}>
                {client.name} {client.lastName}
            </CustomText>
            <CustomText style={[styles.dni]}>DNI {client.dni}</CustomText>
            {client.email && client.email.length > 0 && (
                <CustomText style={styles.emailText}> {client.email}</CustomText>
            )}
            {client.address && client.address.length > 0 && (
                <CustomText style={styles.emailText}> {client.address}</CustomText>
            )}
            <TouchableOpacity
                style={[GlobalStyles.row, styles.containerPhone]}
                activeOpacity={0.7}
                onPress={() => Linking.openURL(`https://api.whatsapp.com/send?phone=${client.phone}}`)}>
                <Icon name='logo-whatsapp' size={24} color={colors.light.whatsapp} />
                <CustomText style={styles.phone}>{client.phone}</CustomText>
            </TouchableOpacity>
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
