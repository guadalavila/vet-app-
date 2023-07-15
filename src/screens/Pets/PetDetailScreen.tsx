import React, { useContext, useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import CustomText from '../../shared/components/CustomText';
import Header from '../../shared/components/Header';
import { getPetGender, getPetSize, getPetType, getRandomColor } from '../../shared/utils/helpers';
import { typography } from '../../shared/utils/typography';
import Button from '../../shared/components/Button';
import Separator from '../../shared/components/Separator';
import { GlobalStyles } from '../../shared/utils/styles';
import { size } from '../../shared/utils/size';
import CardValue from '../../shared/components/CardValue';
import Badge from '../../shared/components/Badge';
import Title from '../../shared/components/Title';
import BottomSheet from '../../shared/components/BottomSheet';
import Option from '../../shared/components/Option';
import clientServices from '../../services/ClientsServices';
import CardCustom from '../../shared/components/CardCustom';
import ItemColor from '../../shared/components/ItemColor';
import { getCodeColor } from '../../shared/utils/constants';
import Icon from '../../shared/components/Icon';
import { ConditionsContext } from '../../contexts/ConditionsContext';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'PetDetailScreen'> {}

const PetDetailScreen = ({ route, navigation }: Props) => {
    const pet = route.params.pet;
    const refresh = route.params.refresh;
    const bottomSheetRef = useRef();
    const { conditionsApp } = useContext(ConditionsContext);

    const getDetailOwner = () => {
        try {
            clientServices.searchOneClient(pet.owner).then((res) => {
                navigation.navigate('ClientDetailScreen', { client: res });
            });
            //@ts-ignore
            bottomSheetRef.current.close();
        } catch (error) {}
    };

    const getConditionColorCode = (name: string) => {
        return conditionsApp.find((x) => name === x.name)?.colorCode ?? getRandomColor();
    };

    const updatePet = () => {
        //@ts-ignore
        bottomSheetRef.current.close();
        navigation.replace('AddPetScreen', { client: undefined, isUpdate: true, pet: pet });
    };

    return (
        <Container>
            <Header
                title='Detalle Mascota'
                buttonBack
                buttonRight
                iconRight='ellipsis-vertical'
                onPressLeft={() => {
                    if (refresh) {
                        navigation.replace('BottomTabScreen', { initialRouteName: 'PetsScreen' });
                    } else {
                        navigation.goBack();
                    }
                }}
                //@ts-ignore
                onPressRight={() => bottomSheetRef.current && bottomSheetRef.current.show()}
            />
            <View style={styles.marginInfo}>
                <CustomText style={styles.name}>{pet.name}</CustomText>
                {pet.race && <CustomText style={styles.race}>Raza: {pet.race} </CustomText>}
            </View>
            <View />
            <View style={[GlobalStyles.rowAround]}>
                <CardValue
                    title='Edad'
                    value={String(pet.age)}
                    valueExtra={pet.age === 1 ? ' año' : ' años'}
                    icon='calendar-outline'
                />
                <CardValue title='Tipo' value={getPetType(pet.type)} icon='paw-outline' />
                <CardCustom
                    title='Sexo'
                    value={getPetGender(pet.gender)}
                    childExtra={
                        <Icon
                            type='MaterialCommunityIcons'
                            name={pet.gender === 'male' ? 'gender-male' : 'gender-female'}
                            color='white'
                        />
                    }
                />
            </View>

            <View style={[GlobalStyles.rowAround]}>
                <CardValue title='¿Está Castrado?' value={pet.sterilized ? 'Si' : 'No'} icon='bandage-outline' />
                <CardCustom
                    title='Color'
                    value={pet.color}
                    childExtra={<ItemColor size={22} color={getCodeColor(pet.color)} />}
                />
                <CardValue title='Tamaño' value={getPetSize(pet.size)} icon='trending-up-outline' />
                {/* <CardValue title='Chip' value={pet.chip === '' ? 'Sin chip' : pet.chip} icon='qr-code-outline' /> */}
            </View>

            <View style={[GlobalStyles.rowAround]} />
            <Separator color='transparent' />
            {pet.conditions && pet.conditions.length > 0 && (
                <>
                    <Title text='Patología/s preexistentes:' />
                    <View style={styles.containerConditions}>
                        {pet.conditions.map((item) => (
                            <Badge key={item} label={item} color={getConditionColorCode(item)} />
                        ))}
                    </View>
                </>
            )}
            <View style={styles.button}>
                <Button
                    onPress={() => navigation.navigate('AddVisitScreen', { client: pet.owner, pet: pet._id })}
                    title='Nueva Visita'
                />
                <Button
                    onPress={() => navigation.navigate('VisitsScreen', { id: pet._id })}
                    title='Historial Clínico'
                />
                {/* <Button
                    style={styles.buttonDelete}
                    onPress={() => console.log('open modal')}
                    title='Eliminar mascota'
                /> */}
            </View>
            <BottomSheet refBottomSheet={bottomSheetRef} height={350}>
                <View style={styles.containerContent}>
                    <Option
                        label='Agregar Visita'
                        icon='add'
                        onPress={() => {
                            //@ts-ignore
                            bottomSheetRef.current.close();
                            navigation.navigate('AddVisitScreen', { client: pet.owner, pet: pet._id });
                        }}
                    />
                    <Option
                        label='Ver Historial Clínico'
                        icon='document'
                        onPress={() => {
                            //@ts-ignore
                            bottomSheetRef.current.close();
                            navigation.navigate('VisitsScreen', { id: pet._id });
                        }}
                    />
                    <Option label='Editar Mascota' icon='pencil' onPress={updatePet} />
                    <Option label='Ver Detalle propietario' icon='people' onPress={getDetailOwner} />
                    <Option label='Ver Calendario de vacunas' icon='calendar' onPress={() => {}} />
                    <Option label='Compartir' icon='share' onPress={() => {}} />
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
    // buttonDelete: {
    //     backgroundColor: colors.light.error,
    // },
    containerConditions: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: size.L,
    },
    containerContent: {
        marginVertical: size.M,
    },
    marginInfo: {
        marginVertical: size.XXL,
    },
});
