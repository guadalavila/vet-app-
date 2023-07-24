import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ItemPetList from '../../shared/components/ItemPetList';
import usePets from '../../shared/hooks/usePets';
import Skeleton from '../../shared/components/Skeleton';
import Fab from '../../shared/components/Fab';
import SearchBar from '../../shared/components/SearchBar';
import useSearchPets from '../../shared/hooks/useSearchPets';
import Loading from '../../shared/components/Loading';
import NoData from '../../shared/components/NoData';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'PetsScreen'> {}

const PetsScreen = ({ navigation }: Props) => {
    const { isLoading, pets, getMorePets, refreshPets, refreshing } = usePets();
    const [textSearch, setTextSearch] = useState('');
    const [clicked, setClicked] = useState(false);
    const { result, searchPets, searching, setSearching, emptyResult } = useSearchPets();

    useEffect(() => {
        if (textSearch.length >= 3) {
            searchPets(textSearch);
        }
        if (textSearch.length === 0) setSearching(false);
    }, [textSearch]);

    const onRefresh = useCallback(() => {
        refreshPets();
    }, []);

    if (isLoading || refreshing) {
        return (
            <Container>
                <Header title='Mascotas' />
                <Skeleton />
            </Container>
        );
    }

    return (
        <Container>
            <Header title='Mascotas' />
            <SearchBar
                placeholder='Buscar por nombre mascota o DNI responsable'
                value={textSearch}
                onChangeValue={setTextSearch}
                clicked={clicked}
                setCLicked={setClicked}
            />
            {!searching ? (
                <>
                    {pets.length > 0 ? (
                        <FlatList
                            data={pets}
                            renderItem={({ item }) => (
                                <ItemPetList
                                    pet={item}
                                    onPress={() => navigation.navigate('PetDetailScreen', { pet: item })}
                                />
                            )}
                            keyExtractor={(item) => item._id}
                            onEndReached={() => getMorePets()}
                            onEndReachedThreshold={0.2}
                            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                        />
                    ) : (
                        <NoData title='Todavía no tenes mascotas agregadas' icon='paw-outline' />
                    )}
                </>
            ) : (
                <View>
                    {result?.length > 0 ? (
                        <FlatList
                            data={result}
                            renderItem={({ item }) => (
                                <ItemPetList
                                    pet={item}
                                    onPress={() => navigation.navigate('PetDetailScreen', { pet: item })}
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
            <Fab onPress={() => navigation.navigate('AddPetScreen', { client: undefined, isUpdate: false })} />
        </Container>
    );
};

export default PetsScreen;

const styles = StyleSheet.create({
    containerNoData: {
        justifyContent: 'center',
        alignContent: 'center',
        height: '90%',
    },
});
