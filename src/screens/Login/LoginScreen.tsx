import React from 'react';
import Container from '~shared/components/Container';
import LoginForm from '~shared/components/LoginForm';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackLogoutParamList } from '~navigations/types';
import useAuth from '~shared/hooks/useAuth';
import Loading from '~shared/components/Loading';
import Button from '~shared/components/Button';
import { Image, StyleSheet } from 'react-native';
import { logEvent } from '~shared/utils/firebase/analytics';
import { EVENTS } from '~shared/utils/firebase/events';

interface Props extends NativeStackScreenProps<RootStackLogoutParamList, 'LoginScreen'> {}

const LoginScreen = ({ navigation }: Props) => {
    const { isLoading, loginWithEmailAndPass } = useAuth();

    return (
        <Container>
            {!isLoading ? (
                <>
                    <Image style={styles.image} source={require('../../../assets/images/login.png')} />
                    <LoginForm
                        onSubmit={({ email, password }) => {
                            loginWithEmailAndPass(email.trim().toLowerCase(), password.trim().toLowerCase());
                        }}
                    />
                    <Button
                        outlined
                        title='¿No tenes cuenta? Registrate'
                        onPress={() => {
                            logEvent(EVENTS.signUp);
                            navigation.navigate('SignUpScreen');
                        }}
                    />
                </>
            ) : (
                <Loading />
            )}
        </Container>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    image: {
        width: 160,
        height: 160,
        alignSelf: 'center',
        marginTop: 120,
    },
});
