import React from 'react';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import NewClientForm from '../../shared/components/NewClientForm';
import useAddClient from '../../shared/hooks/useAddClient';
import Loading from '../../shared/components/Loading';
import useAuth from '../../shared/hooks/useAuth';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AddClientScreen'> {}

const AddClientScreen = ({ navigation, route }: Props) => {
    const { loading, createClient, updateClient } = useAddClient();
    const currentClient = route.params.client;
    console.log(currentClient);
    const isUpdate = route.params.isUpdate;
    const { user } = useAuth();
    //TODO no se puede modificar el dni de una persona (por ahora)
    return (
        <Container>
            <Header title={isUpdate ? 'Actualizar Cliente' : 'Nuevo Cliente '} buttonBack />
            {loading ? (
                <Loading />
            ) : (
                <NewClientForm
                    onSubmit={(data) => {
                        if (!isUpdate) {
                            const newClient = {
                                vetId: user?.vetId?._id ? user.vetId._id : '',
                                ...data,
                            };
                            createClient(newClient).then((res) =>
                                navigation.replace('ClientDetailScreen', { client: res, refresh: true }),
                            );
                        } else {
                            const updClient = { ...currentClient, ...data };
                            updateClient(updClient).then((res) =>
                                navigation.replace('ClientDetailScreen', { client: res, refresh: true }),
                            );
                        }
                    }}
                    initData={{ ...currentClient }}
                />
            )}
        </Container>
    );
};

export default AddClientScreen;
