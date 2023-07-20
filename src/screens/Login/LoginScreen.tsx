import React from 'react';
import Container from '../../shared/components/Container';
import LoginForm from '../../shared/components/LoginForm';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackLogoutParamList } from '../../navigations/types';
import useAuth from '../../shared/hooks/useAuth';
import Loading from '../../shared/components/Loading';
import Button from '../../shared/components/Button';

interface Props extends NativeStackScreenProps<RootStackLogoutParamList, 'LoginScreen'> {}

const LoginScreen = ({ navigation }: Props) => {
    const { isLoading, loginWithEmailAndPass } = useAuth();

    return (
        <Container>
            {!isLoading ? (
                <>
                    <LoginForm
                        onSubmit={({ email, password }) => {
                            loginWithEmailAndPass(email.trim().toLowerCase(), password.trim().toLowerCase());
                        }}
                    />
                    <Button outlined title='Registrarse' onPress={() => navigation.navigate('SignUpScreen')} />
                </>
            ) : (
                <Loading />
            )}
        </Container>
    );
};

export default LoginScreen;
