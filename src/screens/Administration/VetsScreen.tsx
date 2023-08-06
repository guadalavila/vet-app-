import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from '../../shared/components/Container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AdminTabStackParamList } from '../../navigations/types';

interface Props extends NativeStackScreenProps<AdminTabStackParamList, 'VetsScreen'> {}

const VetsScreen = () => {
    return (
        <Container>
            <Text>VetsScreen</Text>
        </Container>
    );
};

export default VetsScreen;

const styles = StyleSheet.create({});
