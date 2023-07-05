import React from 'react';
import Container from '../../shared/components/Container';
import LoginForm from '../../shared/components/LoginForm';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackLogoutParamList } from '../../navigations/types';
import useAuth from '../../shared/hooks/useAuth';

interface Props extends NativeStackScreenProps<RootStackLogoutParamList, 'LoginScreen'> {}

const LoginScreen = ({}: Props) => {
    const { isLoading, loginWithEmailAndPass } = useAuth();

    return (
        <Container>
            <LoginForm
                onSubmit={(data) => {
                    loginWithEmailAndPass(data.email as string, data.password as string);
                }}
            />
        </Container>
    );
};

export default LoginScreen;
