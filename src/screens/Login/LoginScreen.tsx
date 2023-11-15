import React, { useEffect, useState } from 'react';
import Container from '~shared/components/Container';
import LoginForm from '~shared/components/LoginForm';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackLogoutParamList } from '~navigations/types';
import useAuth from '~shared/hooks/useAuth';
import Loading from '~shared/components/Loading';
import Button from '~shared/components/Button';
import { View, Keyboard } from 'react-native';
import { getData } from '~shared/utils/storage/asyncStorage';
import { STORAGE_KEYS } from '~shared/utils/storage/keys';
import { GlobalStyles } from '~shared/utils/styles';

interface Props extends NativeStackScreenProps<RootStackLogoutParamList, 'LoginScreen'> {}

const LoginScreen = ({ navigation }: Props) => {
    const { isLoading, loginWithEmailAndPass } = useAuth();
    const [loading, setLoading] = useState(true);
    const [keyboardStatus, setKeyboardStatus] = useState(false);

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardStatus(false);
        });
        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

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
                <View style={GlobalStyles.flex1}>
                    <LoginForm
                        onSubmit={({ email, password }) => {
                            loginWithEmailAndPass(email.trim().toLowerCase(), password.trim().toLowerCase());
                        }}
                    />
                    {!keyboardStatus && (
                        <Button
                            outlined
                            title='¿No tenes cuenta? Registrate'
                            onPress={() => {
                                navigation.navigate('SignUpScreen');
                            }}
                        />
                    )}
                </View>
            ) : (
                <Loading />
            )}
        </Container>
    );
};

export default LoginScreen;
