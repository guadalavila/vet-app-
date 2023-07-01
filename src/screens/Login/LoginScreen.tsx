import { StyleSheet, View } from 'react-native';
import React from 'react';
import Container from '../../shared/components/Container';
import Button from '../../shared/components/Button';
import { GlobalStyles } from '../../shared/utils/styles';

const LoginScreen = () => {
    return (
        <Container>
            <View style={GlobalStyles.flexCenter}>
                <Button title='Ingresar' onPress={() => {}} />
            </View>
        </Container>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({});
