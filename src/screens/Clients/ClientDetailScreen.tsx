import React, { useEffect, useState } from 'react';
import { FlatList, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../../shared/components/Header';
import Container from '../../shared/components/Container';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { colors } from '../../shared/utils/colors';
import { size } from '../../shared/utils/size';
import { typography } from '../../shared/utils/typography';
import { GlobalStyles } from '../../shared/utils/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import ItemPet from '../../shared/components/ItemPet';
import Title from '../../shared/components/Title';
import { Pet } from '../../models/Pet';
import Card from '../../shared/components/Card';
import CustomText from '../../shared/components/CustomText';
import petsServices from '../../shared/services/PetsService';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'ClientDetailScreen'> {}

const ClientDetailScreen = ({ navigation, route }: Props) => {
    const client = route.params.client;
    const [pets, setPets] = useState<Pet[] | []>([]);

    const getCodeName = () => client.name.charAt(0).concat(client.lastName.charAt(0)).toUpperCase();

    useEffect(() => {
        if (client.dni) {
            try {
                petsServices.getPetsByClient(client.dni).then((res) => {
                    setPets(res);
                });
            } catch (error) {}
        }
    }, []);

    return (
        <Container>
            <Header title={''} buttonBack />
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
                {client.adress && client.adress.length > 0 && (
                    <CustomText style={styles.emailText}> {client.adress}</CustomText>
                )}
                <TouchableOpacity
                    style={[GlobalStyles.row, styles.containerPhone]}
                    activeOpacity={0.7}
                    onPress={() => Linking.openURL(`https://api.whatsapp.com/send?phone=${client.phone}}`)}>
                    <Icon name='logo-whatsapp' size={24} color={colors.light.whatsapp} />
                    <CustomText style={styles.phone}>{client.phone}</CustomText>
                </TouchableOpacity>
            </Card>
            {pets?.length > 0 && (
                <>
                    <Title text={'Mascotas (' + pets.length + ')'} />
                    <View style={styles.containerPets}>
                        <FlatList
                            horizontal
                            data={pets}
                            renderItem={({ item }) => (
                                <ItemPet
                                    pet={item}
                                    onPress={() => navigation.navigate('PetDetailScreen', { pet: item })}
                                />
                            )}
                            keyExtractor={(item) => item._id}
                        />
                    </View>
                </>
            )}
        </Container>
    );
};

export default ClientDetailScreen;

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
    containerPets: {
        marginHorizontal: size.XXL,
        alignContent: 'center',
        alignSelf: 'center',
    },
});
