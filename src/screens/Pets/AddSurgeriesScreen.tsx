import React from 'react';
import { StyleSheet } from 'react-native';
import { RootStackLoginParamList } from '~navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '~shared/components/Container';
import Header from '~shared/components/Header';
import NewSurgeryForm from '~shared/components/NewSurgeryForm';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AddSurgeriesScreen'> {}

const AddSurgeriesScreen = ({}: Props) => {
    return (
        <Container>
            <Header title='Nueva Cirugía' buttonBack />
            <NewSurgeryForm onSubmit={(data) => console.log(data)} />
        </Container>
    );
};

export default AddSurgeriesScreen;

const styles = StyleSheet.create({});
