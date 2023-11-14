import React, { useContext, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RootStackLoginParamList } from '~navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '~shared/components/Container';
import CustomText from '~shared/components/CustomText';
import Header from '~shared/components/Header';
import { typography } from '~shared/utils/typography';
import Button from '~shared/components/Button';
import Separator from '~shared/components/Separator';
import { size } from '~shared/utils/size';
import BottomSheet from '~shared/components/BottomSheet';
import Option from '~shared/components/Option';
import clientServices from '~services/ClientsServices';
import ModalCustom from '~shared/components/ModalCustom';
import useDelete from '~shared/hooks/useDelete';
import PetDetail from '~shared/components/PetDetail';
import ConditionsList from '~shared/components/ConditionsList';
import useGetOnePet from '~shared/hooks/useGetOnePet';
import Loading from '~shared/components/Loading';
import useError from '~shared/hooks/useError';
import { RemoteConfigContext } from '~contexts/RemoteConfigContext';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'PetDetailScreen'> {}

const PetDetailScreen = ({ route, navigation }: Props) => {
    const pet = route.params.pet;
    const refresh = route.params.refresh;
    const { loading, detailPet } = useGetOnePet(pet._id, route.params.getDetail);
    const bottomSheetRef = useRef();
    const [showModal, setShowModal] = useState(false);
    const { deletePet } = useDelete();
    const { setErrorApp } = useError();
    const { activeSurgery, activeVaccine } = useContext(RemoteConfigContext);

    const getDetailOwner = () => {
        try {
            clientServices.getClient(typeof pet.client === 'string' ? pet.client : pet.client._id).then((res) => {
                navigation.navigate('ClientDetailScreen', { client: res });
            });
            closeBottomSheet();
        } catch (error) {
            setErrorApp({
                isError: true,
                message: String(error) ?? 'Obtener detalle clientes: Ocurrió un error',
                type: 'error',
            });
        }
    };

    const onPressLeftBtn = () => {
        if (refresh) {
            navigation.replace('BottomTabScreen', { initialRouteName: 'PetsScreen' });
        } else {
            navigation.goBack();
        }
    };

    //@ts-ignore
    const closeBottomSheet = () => bottomSheetRef.current && bottomSheetRef.current.close();

    const updatePet = () => {
        closeBottomSheet();
        navigation.replace('AddPetScreen', { client: undefined, isUpdate: true, pet: { ...pet, ...detailPet } });
    };

    const addVisit = () => {
        closeBottomSheet();
        navigation.navigate('AddVisitScreen', {
            pet: pet._id,
        });
    };

    const showVisits = () => {
        closeBottomSheet();
        navigation.navigate('VisitsScreen', { id: pet._id, name: pet.name });
    };

    const showSurgeryRegistry = () => {
        closeBottomSheet();
        navigation.navigate('SurgeryRegistryScreen', { petId: pet._id });
    };

    const showVaccinesRegistry = () => {
        closeBottomSheet();
        navigation.navigate('VaccinesRegistryScreen', { petId: pet._id });
    };

    const handleSharePet = () => {
        closeBottomSheet();
        setTimeout(() => {
            setShowModal(true);
        }, 500);
    };

    if (loading) {
        return (
            <Container>
                <Loading />
            </Container>
        );
    }

    return (
        <Container>
            <Header
                title='Detalle Mascota'
                buttonBack
                buttonRight
                iconRight='ellipsis-vertical'
                onPressLeft={onPressLeftBtn}
                //@ts-ignore
                onPressRight={() => bottomSheetRef.current && bottomSheetRef.current.show()}
            />
            <View style={styles.marginInfo}>
                <CustomText style={styles.name}>{pet.name}</CustomText>
                {pet.breed && <CustomText style={styles.race}>Raza: {pet.breed} </CustomText>}
            </View>
            <View />
            <PetDetail pet={pet} />
            <Separator color='transparent' />
            {route.params.getDetail ? (
                <>
                    {detailPet && detailPet.pathologies && detailPet.pathologies.length > 0 && (
                        <ConditionsList
                            conditions={detailPet.pathologies.map((x) => (typeof x === 'string' ? x : x.name))}
                        />
                    )}
                </>
            ) : (
                <>
                    {pet && pet.pathologies && pet.pathologies.length > 0 && (
                        <ConditionsList conditions={pet.pathologies.map((x) => (typeof x === 'string' ? x : x.name))} />
                    )}
                </>
            )}
            <View style={styles.button}>
                <Button title='Nueva Visita' onPress={addVisit} />
                <Button title='Historial Clínico' onPress={showVisits} />
            </View>
            <ModalCustom
                title='¿Seguro que querés eliminar la mascota?'
                visible={showModal}
                message='Al eliminarla, se eliminaran todas las visitas asociadas.'
                confirmButton={'Aceptar'}
                cancelButton='Cancelar'
                onConfirmPressed={() => deletePet(pet._id)}
                onCancelPressed={() => setShowModal(false)}
            />
            <BottomSheet refBottomSheet={bottomSheetRef} height={380}>
                <View style={styles.containerContent}>
                    <Option label='Editar Mascota' icon='pencil-outline' onPress={updatePet} />
                    <Option label='Agregar Visita' icon='add-outline' onPress={addVisit} />
                    <Option label='Ver Historial Clínico' icon='document-outline' onPress={showVisits} />
                    {activeSurgery && (
                        <Option
                            label='Registro de cirugías'
                            icon='document-text-outline'
                            onPress={showSurgeryRegistry}
                        />
                    )}
                    {activeVaccine && (
                        <Option
                            label='Registro de vacunas'
                            icon='document-text-outline'
                            onPress={showVaccinesRegistry}
                        />
                    )}
                    <Option label='Ver Detalle propietario' icon='people-outline' onPress={getDetailOwner} />
                </View>
            </BottomSheet>
        </Container>
    );
};

export default PetDetailScreen;

const styles = StyleSheet.create({
    name: {
        fontSize: typography.size.L,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    race: {
        fontSize: typography.size.S,
        textAlign: 'center',
        fontWeight: '600',
        marginTop: size.M,
    },
    button: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
    },
    containerContent: {
        marginVertical: size.M,
    },
    marginInfo: {
        marginVertical: size.XXL,
    },
});
