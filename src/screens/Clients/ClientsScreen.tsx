import { StyleSheet, Text } from 'react-native';
import React from 'react';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';

const ClientsScreen = () => {
    return (
        <Container>
            <Header title='Clientes' buttonBack />
            <Text>ClientsScreen</Text>
        </Container>
    );
};

export default ClientsScreen;

const styles = StyleSheet.create({});
