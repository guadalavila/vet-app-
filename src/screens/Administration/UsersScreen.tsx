import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from '../../shared/components/Container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AdminTabStackParamList } from '../../navigations/types';

interface Props extends NativeStackScreenProps<AdminTabStackParamList, 'UsersScreen'> {}

const UsersScreen = () => {
    return (
        <Container>
            <Text>UsersScreen</Text>
        </Container>
    );
};

export default UsersScreen;

const styles = StyleSheet.create({});
