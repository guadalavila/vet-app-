import React from 'react';
import Container from '../../shared/components/Container';
import LoginForm from '../../shared/components/LoginForm';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackLogoutParamList } from '../../navigations/types';
import useAuth from '../../shared/hooks/useAuth';
import Loading from '../../shared/components/Loading';

interface Props extends NativeStackScreenProps<RootStackLogoutParamList, 'LoginScreen'> {}

const LoginScreen = ({}: Props) => {
    const { isLoading, loginWithEmailAndPass } = useAuth();

    return (
        <Container>
            {!isLoading ? (
                <LoginForm
                    onSubmit={({ email, password }) => {
                        loginWithEmailAndPass(email.trim().toLowerCase(), password.trim().toLowerCase());
                    }}
                />
            ) : (
                <Loading />
            )}
        </Container>
    );
};

export default LoginScreen;
