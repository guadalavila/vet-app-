import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackLogoutParamList } from '../../navigations/types';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import SignUpForm from '../../shared/components/SignUpForm';
import useSignUp from '../../shared/hooks/useSignUp';
import { NewUser } from '../../models/User';
import { Role } from '../../models/Role';

interface Props extends NativeStackScreenProps<RootStackLogoutParamList, 'SignUpScreen'> {}

const SignUpScreen = ({}: Props) => {
    const { loading, signup } = useSignUp();
    return (
        <Container>
            <Header title='Registrarse' buttonBack />
            <SignUpForm
                onSubmit={({ name, lastName, email, password }) => {
                    const newUser: NewUser = {
                        name: String(name),
                        lastName: String(lastName),
                        email: String(email),
                        password: String(password),
                        role: Role.User,
                    };
                    signup(newUser);
                    console.log({ newUser });
                }}
            />
        </Container>
    );
};

export default SignUpScreen;
