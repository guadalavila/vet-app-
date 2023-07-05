import React from 'react';
import { StyleSheet } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import NewClientForm from '../../shared/components/NewClientForm';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AddClientScreen'> {}

const AddClientScreen = ({}: Props) => {
    return (
        <Container>
            <Header title='Nuevo Cliente' buttonBack />
            <NewClientForm onSubmit={(data) => console.log(data)} />
        </Container>
    );
};

export default AddClientScreen;

const styles = StyleSheet.create({});
