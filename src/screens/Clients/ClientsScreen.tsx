import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Client } from '../../models/Client';
import ItemClientList from '../../shared/components/ItemClientList';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'ClientsScreen'> {}

const ClientsScreen = ({ navigation }: Props) => {
    const DATA_MOCK: Client[] = [
        {
            _id: '649efb16e70ce200082832e4',
            name: 'A',
            lastName: 'López',
            dni: '0000000',
            email: '',
            phone: '0303456',
            adress: 'Sin calle 00999',
            comment: '',
            createdAt: '2023-06-30T15:56:06.714Z',
            updatedAt: '2023-06-30T15:56:06.714Z',
        },
    ];
    return (
        <Container>
            <Header title='Clientes' buttonBack />
            <FlatList
                data={DATA_MOCK}
                renderItem={({ item }) => (
                    <ItemClientList
                        client={item}
                        onPress={() => navigation.navigate('ClientDetailScreen', { client: item })}
                    />
                )}
                keyExtractor={(item) => item._id}
            />
        </Container>
    );
};

export default ClientsScreen;

const styles = StyleSheet.create({});
