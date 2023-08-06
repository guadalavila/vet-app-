import React, { useCallback } from 'react';
import { FlatList, StyleSheet, View, RefreshControl } from 'react-native';
import Container from '../../shared/components/Container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AdminTabStackParamList } from '../../navigations/types';
import Header from '../../shared/components/Header';
import ItemUser from '../../shared/adm/components/ItemUser';
import Loading from '../../shared/components/Loading';
import useUsers from '../../shared/adm/hooks/useUsers';
import Title from '../../shared/components/Title';

interface Props extends NativeStackScreenProps<AdminTabStackParamList, 'UsersScreen'> {}

const UsersScreen = ({}: Props) => {
    const { loading, users, refreshing, refreshUsers } = useUsers();

    const onRefresh = useCallback(() => {
        refreshUsers();
    }, []);

    if (loading || refreshing) {
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
            <Title text={'Total: ' + users?.length + ' usuarios'} />
            <FlatList
                data={users}
                renderItem={({ item }) => <ItemUser user={item} onPress={() => {}} />}
                keyExtractor={(item) => item._id}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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
