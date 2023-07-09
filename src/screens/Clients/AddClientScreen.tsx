import React from 'react';
import { StyleSheet } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import NewClientForm from '../../shared/components/NewClientForm';
import useAddClient from '../../shared/hooks/useAddClient';
import Loading from '../../shared/components/Loading';
import { NewClient } from '../../models/Client';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AddClientScreen'> {}

const AddClientScreen = ({ navigation }: Props) => {
    const { loading, createClient } = useAddClient();
    return (
        <Container>
            <Header title='Nuevo Cliente' buttonBack />
            {loading ? (
                <Loading />
            ) : (
                <NewClientForm
                    onSubmit={(data) => {
                        const newClient: NewClient = {
                            name: String(data.name),
                            lastName: String(data.lastName),
                            dni: String(data.dni),
                            email: data.email ? String(data.email) : '',
                            phone: String(data.phone),
                            adress: data.adress ? String(data.adress) : '',
                            comment: data.comment ? String(data.comment) : '',
                        };
                        createClient(newClient).then((res) => navigation.navigate('DashboardScreen'));
                    }}
                />
            )}
        </Container>
    );
};

export default AddClientScreen;

const styles = StyleSheet.create({});
