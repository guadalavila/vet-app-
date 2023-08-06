import React from 'react';
import { StyleSheet } from 'react-native';
import { AdminTabStackParamList } from '../../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../../shared/components/Container';
import Header from '../../../shared/components/Header';
import NewUserForm from '../../../shared/adm/components/NewUserForm';
import { User } from '../../../models/User';
import useUpdateUser from '../../../shared/adm/hooks/useUpdateUser';
import Loading from '../../../shared/components/Loading';

interface Props extends NativeStackScreenProps<AdminTabStackParamList, 'AddUserScreen'> {}

const AddUserScreen = ({ navigation, route }: Props) => {
    const user = route.params.user;
    const { loading, updateUser } = useUpdateUser();
    return (
        <Container>
            <Header buttonBack title={!user ? 'Nuevo Usuario' : 'Editar Usuario'} />
            {loading ? (
                <Loading />
            ) : (
                <NewUserForm
                    onSubmit={(data) => {
                        const userUpd: User = {
                            ...user,
                            ...data,
                        };
                        updateUser(userUpd).then((res) => {
                            navigation.goBack();
                        });
                    }}
                    user={user}
                />
            )}
        </Container>
    );
};

export default AddUserScreen;

const styles = StyleSheet.create({});
