import { StyleSheet, Text } from 'react-native';
import React from 'react';
import Header from '../../shared/components/Header';
import Container from '../../shared/components/Container';

const ClientDetailScreen = () => {
    return (
        <Container>
            <Header title='Detalle' buttonBack />
            <Text>ClientDetailScreen</Text>
        </Container>
    );
};

export default ClientDetailScreen;

const styles = StyleSheet.create({});
