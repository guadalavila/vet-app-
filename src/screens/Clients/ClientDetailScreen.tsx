import { FlatList, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
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
import { ThemeContext } from '../../contexts/ThemeContext';
import Card from '../../shared/components/Card';
import CustomText from '../../shared/components/CustomText';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'ClientDetailScreen'> {}

const ClientDetailScreen = ({ navigation, route }: Props) => {
    const client = route.params.client;
    const { themeApp } = useContext(ThemeContext);

    const getCodeName = () => client.name.charAt(0).concat(client.lastName.charAt(0)).toUpperCase();

    const pets: Pet[] = [
        {
            conditions: [],
            _id: '649efb38e70ce200082832eb',
            owner: '42706489',
            name: 'Princesa',
            chip: '',
            type: 'feline',
            race: 'Común europeo',
            gender: 'female',
            color: 'Negro',
            size: 'small',
            age: 2,
            imageURL: 'https://res.cloudinary.com/deoaxotzs/image/upload/v1631590195/vet-app/pets/feline_ww1mju.png',
        },
    ];

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
                <TouchableOpacity
                    style={[GlobalStyles.row, styles.containerPhone]}
                    activeOpacity={0.7}
                    onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=000000000000')}>
                    <Icon name='logo-whatsapp' size={24} color={colors.light.whatsapp} />
                    <CustomText style={styles.phone}>{client.phone}</CustomText>
                </TouchableOpacity>
                <Text> {client.email}</Text>
            </Card>
            <Title text='Mascotas' />
            <Card>
                <FlatList
                    numColumns={2}
                    data={pets}
                    renderItem={({ item }) => <ItemPet pet={item} />}
                    keyExtractor={(item) => item._id}
                />
            </Card>
        </Container>
    );
};

export default ClientDetailScreen;

const styles = StyleSheet.create({
    card: {
        marginHorizontal: size.XXL,
        borderRadius: 16,
        paddingVertical: size.XL,
        paddingHorizontal: size.L,
    },
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
    separator: {
        marginTop: size.XXL,
    },
    containerPet: {
        borderRadius: 8,
    },
});
