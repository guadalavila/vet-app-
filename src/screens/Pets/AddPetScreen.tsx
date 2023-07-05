import React from 'react';
import { StyleSheet } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import NewPetForm from '../../shared/components/NewPetForm';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AddPetScreen'> {}

const AddPetScreen = ({}: Props) => {
    return (
        <Container>
            <Header title='Nueva Mascota' buttonBack />
            <NewPetForm onSubmit={(data) => console.log(data)} />
        </Container>
    );
};

export default AddPetScreen;

const styles = StyleSheet.create({});
