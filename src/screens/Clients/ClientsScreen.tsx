import { FlatList, StyleSheet } from 'react-native';
import React from 'react';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ItemClientList from '../../shared/components/ItemClientList';
import useClients from '../../shared/hooks/useClients';
import Skeleton from '../../shared/components/Skeleton';
import Fab from '../../shared/components/Fab';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'ClientsScreen'> {}

const ClientsScreen = ({ navigation }: Props) => {
    const {
        dataClients: { clients },
        isLoading,
    } = useClients();

    if (isLoading) {
        return (
            <Container>
                <Header title='Clientes' />
                <Skeleton />
            </Container>
        );
    }

    return (
        <Container>
            <Header title='Clientes' buttonBack />
            <FlatList
                data={clients}
                renderItem={({ item }) => (
                    <ItemClientList
                        client={item}
                        onPress={() => navigation.navigate('ClientDetailScreen', { client: item })}
                    />
                )}
                keyExtractor={(item) => item._id}
            />
            <Fab onPress={() => navigation.navigate('AddClientScreen')} />
        </Container>
    );
};

export default ClientsScreen;

const styles = StyleSheet.create({});
