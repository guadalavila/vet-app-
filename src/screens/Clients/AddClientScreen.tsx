import React from 'react';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import NewClientForm from '../../shared/components/NewClientForm';
import useAddClient from '../../shared/hooks/useAddClient';
import Loading from '../../shared/components/Loading';
import { NewClient } from '../../models/Client';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AddClientScreen'> {}

const AddClientScreen = ({ navigation, route }: Props) => {
    const { loading, createClient, updateClient } = useAddClient();
    const currentClient = route.params.client ?? undefined;
    const isUpdate = route.params.isUpdate;
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
                            const newClient: NewClient = {
                                name: String(data.name),
                                lastName: String(data.lastName),
                                dni: String(data.dni),
                                email: data.email ? String(data.email) : '',
                                phone: String(data.phone),
                                adress: data.adress ? String(data.adress) : '',
                                comment: data.comment ? String(data.comment) : '',
                            };
                            createClient(newClient).then((res) =>
                                navigation.replace('ClientDetailScreen', { client: res }),
                            );
                        } else {
                            const updClient = { ...currentClient, ...data };
                            updateClient(updClient).then((res) =>
                                navigation.replace('ClientDetailScreen', { client: res }),
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
