import React, { useEffect, useState } from 'react';
import Container from '~shared/components/Container';
import LoginForm from '~shared/components/LoginForm';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackLogoutParamList } from '~navigations/types';
import useAuth from '~shared/hooks/useAuth';
import Loading from '~shared/components/Loading';
import Button from '~shared/components/Button';
import { Image, StyleSheet } from 'react-native';
import { getData } from '~shared/utils/storage/asyncStorage';
import { STORAGE_KEYS } from '~shared/utils/storage/keys';

interface Props extends NativeStackScreenProps<RootStackLogoutParamList, 'LoginScreen'> {}

const LoginScreen = ({ navigation }: Props) => {
    const { isLoading, loginWithEmailAndPass } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkData();
    }, []);

    const checkData = async () => {
        getData(STORAGE_KEYS.INIT_ROUTE).then((route) => {
            if (route && route === 'LoginScreen') {
                setLoading(false);
            } else {
                setLoading(false);
                navigation.replace('OnBoardingScreen');
            }
        });
    };

    return (
        <Container>
            {!isLoading && !loading ? (
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
                            // logEvent(EVENTS.signUp);
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
