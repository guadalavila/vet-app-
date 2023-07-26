import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ItemClientList from '../../shared/components/ItemClientList';
import useClients from '../../shared/hooks/useClients';
import Skeleton from '../../shared/components/Skeleton';
import Fab from '../../shared/components/Fab';
import SearchBar from '../../shared/components/SearchBar';
import useSearchClients from '../../shared/hooks/useSearchClients';
import Loading from '../../shared/components/Loading';
import NoData from '../../shared/components/NoData';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'ClientsScreen'> {}

const ClientsScreen = ({ navigation }: Props) => {
    const { clients, isLoading, refreshClients, refreshing } = useClients();
    const [textSearch, setTextSearch] = useState('');
    const [clicked, setClicked] = useState(false);
    const { result, searchClientsByDNI, activeSearching, setActiveSearching, emptyResult } = useSearchClients();

    useEffect(() => {
        if (textSearch.length >= 3) {
            searchClientsByDNI(textSearch);
        }
        if (textSearch.length === 0) setActiveSearching(false);
    }, [textSearch]);

    const onRefresh = useCallback(() => {
        refreshClients();
    }, []);

    if (isLoading || refreshing) {
        return (
            <Container>
                <Header title='Clientes' />
                <Skeleton />
            </Container>
        );
    }

    return (
        <Container>
            <Header title='Clientes' />
            <SearchBar
                placeholder='Buscar por DNI'
                value={textSearch}
                keyboardType='number-pad'
                onChangeValue={setTextSearch}
                clicked={clicked}
                setCLicked={setClicked}
                onCancelSearch={() => setActiveSearching(false)}
            />
            {!activeSearching ? (
                <FlatList
                    data={clients}
                    renderItem={({ item }) => (
                        <ItemClientList
                            client={item}
                            onPress={() => navigation.navigate('ClientDetailScreen', { client: item })}
                        />
                    )}
                    keyExtractor={(item) => item._id}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                    // onEndReached={() => getMoreClients()}
                    onEndReachedThreshold={0.2}
                />
            ) : (
                <View>
                    {result.length > 0 ? (
                        <FlatList
                            data={result}
                            renderItem={({ item }) => (
                                <ItemClientList
                                    client={item}
                                    onPress={() => navigation.navigate('ClientDetailScreen', { client: item })}
                                />
                            )}
                            keyExtractor={(item) => item._id}
                        />
                    ) : (
                        <View style={styles.containerNoData}>
                            {!emptyResult ? <Loading /> : <NoData title='Sin resultados en la búsqueda' />}
                        </View>
                    )}
                </View>
            )}
            <Fab onPress={() => navigation.navigate('AddClientScreen', { isUpdate: false })} />
        </Container>
    );
};

export default ClientsScreen;

const styles = StyleSheet.create({
    containerNoData: {
        justifyContent: 'center',
        alignContent: 'center',
        height: '90%',
    },
});
