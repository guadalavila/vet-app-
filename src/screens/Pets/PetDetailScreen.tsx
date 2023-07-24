import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import CustomText from '../../shared/components/CustomText';
import Header from '../../shared/components/Header';
import { typography } from '../../shared/utils/typography';
import Button from '../../shared/components/Button';
import Separator from '../../shared/components/Separator';
import { size } from '../../shared/utils/size';
import BottomSheet from '../../shared/components/BottomSheet';
import Option from '../../shared/components/Option';
import clientServices from '../../services/ClientsServices';
import ModalCustom from '../../shared/components/ModalCustom';
import useDelete from '../../shared/hooks/useDelete';
import PetDetail from '../../shared/components/PetDetail';
import ConditionsList from '../../shared/components/ConditionsList';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'PetDetailScreen'> {}

const PetDetailScreen = ({ route, navigation }: Props) => {
    const pet = route.params.pet;
    const refresh = route.params.refresh;
    const bottomSheetRef = useRef();
    const [showModal, setShowModal] = useState(false);
    const { deletePet } = useDelete();

    const getDetailOwner = () => {
        try {
            if (typeof pet.client === 'string') {
                clientServices.getClient(pet.client).then((res) => {
                    navigation.navigate('ClientDetailScreen', { client: res });
                });
                closeBottomSheet();
            }
        } catch (error) {}
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
        navigation.replace('AddPetScreen', { client: undefined, isUpdate: true, pet: pet });
    };

    const addVisit = () => {
        closeBottomSheet();
        // navigation.navigate('AddVisitScreen', { client: pet.client.dni, pet: pet._id });
    };

    const showVisits = () => {
        closeBottomSheet();
        navigation.navigate('VisitsScreen', { id: pet._id });
    };

    const showSurgeryRegistry = () => {
        closeBottomSheet();
        navigation.navigate('SurgeryRegistryScreen');
    };

    const showVaccinesRegistry = () => {
        closeBottomSheet();
        navigation.navigate('VaccinesRegistryScreen');
    };

    const handleDeletePet = () => {
        closeBottomSheet();
        setTimeout(() => {
            setShowModal(true);
        }, 500);
    };

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
            {pet.pathologies && pet.pathologies.length > 0 && (
                <ConditionsList conditions={pet.pathologies.map((x) => x.name)} />
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
            <BottomSheet refBottomSheet={bottomSheetRef} height={390}>
                <View style={styles.containerContent}>
                    <Option label='Editar Mascota' icon='pencil' onPress={updatePet} />
                    <Option label='Agregar Visita' icon='add' onPress={addVisit} />
                    <Option label='Ver Historial Clínico' icon='document' onPress={showVisits} />
                    <Option label='Registro de cirugías' icon='document-text' onPress={showSurgeryRegistry} />
                    <Option label='Registro de vacunas' icon='document-text' onPress={showVaccinesRegistry} />
                    <Option label='Ver Detalle propietario' icon='people' onPress={getDetailOwner} />
                    <Option label='Eliminar Mascota' icon='trash' onPress={handleDeletePet} />
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
