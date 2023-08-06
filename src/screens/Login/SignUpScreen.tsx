import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackLogoutParamList } from '../../navigations/types';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import SignUpForm from '../../shared/components/SignUpForm';
import { NewUser } from '../../models/User';
import { Role } from '../../models/Role';
import Loading from '../../shared/components/Loading';
import useAuth from '../../shared/hooks/useAuth';

interface Props extends NativeStackScreenProps<RootStackLogoutParamList, 'SignUpScreen'> {}

const SignUpScreen = ({}: Props) => {
    const { isLoading, signUp } = useAuth();
    return (
        <Container>
            <Header title='Registrarse' buttonBack />
            {isLoading ? (
                <Loading />
            ) : (
                <SignUpForm
                    onSubmit={({ name, lastName, email, password, dni, phone }) => {
                        const newUser: NewUser = {
                            name: String(name),
                            lastName: String(lastName),
                            dni: String(dni),
                            email: String(email),
                            phone: phone ? String(phone) : '',
                            password: String(password),
                            role: Role.User,
                        };
                        signUp(newUser);
                    }}
                />
            )}
        </Container>
    );
};

export default SignUpScreen;
