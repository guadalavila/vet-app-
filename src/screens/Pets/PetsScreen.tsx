import { StyleSheet, Text } from 'react-native';
import React from 'react';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';

const PetsScreen = () => {
    return (
        <Container>
            <Header title='Mascotas' buttonBack />
            <Text>PetsScreen</Text>
        </Container>
    );
};

export default PetsScreen;

const styles = StyleSheet.create({});
