import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Container from '../../shared/components/Container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AdminTabStackParamList } from '../../navigations/types';

import Header from '../../shared/components/Header';
import ItemUser from '../../shared/adm/components/ItemUser';
import Loading from '../../shared/components/Loading';
import useUsers from '../../shared/adm/hooks/useUsers';
import Title from '../../shared/components/Title';

interface Props extends NativeStackScreenProps<AdminTabStackParamList, 'UsersScreen'> {}

const UsersScreen = () => {
    const { loading, users } = useUsers();

    if (loading) {
        return (
            <Container>
                <Header title='Usuarios' />
                <Loading />
            </Container>
        );
    }
    return (
        <Container>
            <Header title='Usuarios' />
            <Title text='Total: ' />
            <FlatList
                data={users}
                renderItem={({ item }) => <ItemUser user={item} onPress={() => {}} />}
                keyExtractor={(item) => item._id}
            />
            <View style={styles.bottom} />
        </Container>
    );
};

export default UsersScreen;

const styles = StyleSheet.create({
    bottom: {
        height: 55,
        width: '100%',
    },
});
