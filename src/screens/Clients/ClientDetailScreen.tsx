import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../../shared/components/Header';
import Container from '../../shared/components/Container';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pet } from '../../models/Pet';
import petsServices from '../../services/PetsService';
import Button from '../../shared/components/Button';
import Loading from '../../shared/components/Loading';
import ClientDetail from '../../shared/components/ClientDetail';
import ListPets from '../../shared/components/ListPets';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'ClientDetailScreen'> {}

const ClientDetailScreen = ({ navigation, route }: Props) => {
    const client = route.params.client;
    const refresh = route.params.refresh;
    const [pets, setPets] = useState<Pet[] | []>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (client.dni) {
            try {
                setLoading(true);
                petsServices.getPetsByClient(client.dni).then((res) => {
                    setPets(res);
                    setLoading(false);
                });
            } catch (error) {
                setLoading(false);
            }
        }
    }, []);

    const onPressLeftBtn = () => {
        if (refresh) {
            navigation.replace('BottomTabScreen', { initialRouteName: 'ClientsScreen' });
        } else {
            navigation.goBack();
        }
    };

    const addPet = () => {
        navigation.navigate('AddPetScreen', { client: client, isUpdate: false });
    };

    const goToPet = (pet: Pet) => {
        navigation.navigate('PetDetailScreen', { pet: pet });
    };

    return (
        <Container>
            <Header
                title={''}
                buttonBack
                buttonRight
                onPressRight={() => navigation.replace('AddClientScreen', { isUpdate: true, client: client })}
                onPressLeft={onPressLeftBtn}
                iconRight='pencil-outline'
            />
            <ClientDetail client={client} />
            {loading && <Loading />}
            {pets?.length > 0 && <ListPets pets={pets} onPressPet={(pet) => goToPet(pet)} />}
            <View style={styles.button}>
                <Button onPress={addPet} title='Agregar Mascota' />
            </View>
        </Container>
    );
};

export default ClientDetailScreen;

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
    },
});
