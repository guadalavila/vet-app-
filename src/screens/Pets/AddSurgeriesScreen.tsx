import React from 'react';
import { StyleSheet } from 'react-native';
import { RootStackLoginParamList } from '~navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '~shared/components/Container';
import Header from '~shared/components/Header';
import NewSurgeryForm from '~shared/components/NewSurgeryForm';
import useAddSurgery from '~shared/hooks/useAddSurgery';
import Loading from '~shared/components/Loading';
import { NewSurgery } from '~models/Surgery';
import useAuth from '~shared/hooks/useAuth';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AddSurgeriesScreen'> {}

const AddSurgeriesScreen = ({ route, navigation }: Props) => {
    const { createSurgery, loading } = useAddSurgery();
    const { user } = useAuth();
    const { petId } = route.params;

    return (
        <Container>
            <Header title='Nueva Cirugía' buttonBack />
            {loading ? (
                <Loading />
            ) : (
                <NewSurgeryForm
                    onSubmit={(data) => {
                        const newSurgery: NewSurgery = {
                            //@ts-ignore
                            date: data.date,
                            createdBy: user?._id ? user._id : '',
                            vetId: typeof user?.vetId === 'string' ? user.vetId : user?.vetId?._id ?? '',
                            pet: petId,
                            description: String(data.description),
                            ...data,
                        };
                        createSurgery(newSurgery).then(() => {
                            navigation.replace('SurgeryRegistryScreen', { petId: petId });
                        });
                    }}
                />
            )}
        </Container>
    );
};

export default AddSurgeriesScreen;

const styles = StyleSheet.create({});
