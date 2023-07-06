import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import CustomText from '../../shared/components/CustomText';
import Header from '../../shared/components/Header';
import { getConditionColor, getPetGender, getPetSize, getPetType } from '../../shared/utils/helpers';
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
import clientServices from '../../shared/services/ClientsServices';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'PetDetailScreen'> {}

const PetDetailScreen = ({ route, navigation }: Props) => {
    const pet = route.params.pet;
    const bottomSheetRef = useRef();

    const getDetailOwner = () => {
        try {
            clientServices.searchOneClient(pet.owner).then((res) => {
                navigation.navigate('ClientDetailScreen', { client: res });
            });
            //@ts-ignore
            bottomSheetRef.current.close();
        } catch (error) {}
    };

    return (
        <Container>
            <Header
                title='Reporte'
                buttonBack
                buttonRight
                iconRight='ellipsis-vertical'
                //@ts-ignore
                onPressRight={() => bottomSheetRef.current && bottomSheetRef.current.show()}
            />
            <View style={{ marginVertical: size.XXL }}>
                <CustomText style={styles.name}>{pet.name}</CustomText>
                <CustomText style={styles.race}>{pet.race} </CustomText>
            </View>
            <View />
            <View style={[GlobalStyles.rowAround]}>
                <CardValue title='Edad' value={String(pet.age)} valueExtra=' años' icon='calendar-outline' />
                <CardValue title='Tipo' value={getPetType(pet.type)} icon='paw-outline' />
                <CardValue title='Sexo' value={getPetGender(pet.gender)} icon='male-outline' />
            </View>
            <View style={[GlobalStyles.rowAround]}>
                <CardValue title='Color' value={pet.color} icon='color-palette-outline' />
                <CardValue title='Tamaño' value={getPetSize(pet.size)} icon='trending-up-outline' />
                <CardValue title='Chip' value={pet.chip === '' ? 'Sin chip' : pet.chip} icon='qr-code-outline' />
            </View>
            <View style={[GlobalStyles.rowAround]} />
            <Separator color='transparent' />
            {pet.conditions.length > 0 && (
                <>
                    <Title text='Condiciones:' />
                    <View style={styles.containerConditions}>
                        {pet.conditions.map((item) => (
                            <Badge label={item} color={getConditionColor(item)} />
                        ))}
                    </View>
                </>
            )}
            <View style={styles.button}>
                <Button onPress={() => navigation.navigate('VisitsScreen', { id: pet._id })} title='Historia clínica' />
                <Button onPress={() => navigation.navigate('AddVisitScreen')} title='Nueva Visita' />
                {/* <Button
                    style={styles.buttonDelete}
                    onPress={() => console.log('open modal')}
                    title='Eliminar mascota'
                /> */}
            </View>
            <BottomSheet refBottomSheet={bottomSheetRef} height={350}>
                <View style={styles.containerContent}>
                    <Option
                        label='Agregar visita'
                        icon='add'
                        onPress={() => {
                            //@ts-ignore
                            bottomSheetRef.current.close();
                            navigation.navigate('AddVisitScreen');
                        }}
                    />
                    <Option
                        label='Ver Historia Clinica'
                        icon='document'
                        onPress={() => {
                            //@ts-ignore
                            bottomSheetRef.current.close();
                            navigation.navigate('VisitsScreen', { id: pet._id });
                        }}
                    />
                    <Option label='Editar Mascota' icon='pencil' onPress={() => {}} />
                    <Option label='Ver Detalle Responsable' icon='people' onPress={getDetailOwner} />
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
    },
    button: {
        position: 'absolute',
        bottom: 0,
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
});
