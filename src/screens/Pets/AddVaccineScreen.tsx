import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import NewVaccineForm from '../../shared/components/NewVaccineForm';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AddVaccineScreen'> {}

const AddVaccineScreen = () => {
    return (
        <Container>
            <Header buttonBack title='Nueva Vacuna' />
            <NewVaccineForm onSubmit={(data) => console.log(data)} />
        </Container>
    );
};

export default AddVaccineScreen;

const styles = StyleSheet.create({});
