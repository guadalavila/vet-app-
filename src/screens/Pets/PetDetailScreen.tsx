import React from 'react';
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
import { colors } from '../../shared/utils/colors';
import { size } from '../../shared/utils/size';
import CardValue from '../../shared/components/CardValue';
import Badge from '../../shared/components/Badge';
import Title from '../../shared/components/Title';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'PetDetailScreen'> {}

const PetDetailScreen = ({ route, navigation }: Props) => {
    const pet = route.params.pet;
    return (
        <Container>
            <Header title='Reporte' buttonBack />
            <View style={{ marginVertical: size.XXL }}>
                <CustomText style={styles.name}>{pet.name}</CustomText>
                <CustomText style={styles.race}>{pet.race} </CustomText>
            </View>
            <View />
            <View style={[GlobalStyles.rowAround]}>
                <CardValue title='Edad' value={String(pet.age)} valueExtra=' años' icon='calendar-outline' />
                <CardValue title='Tipo' value={getPetType(pet.type)} icon='paw-outline' />
            </View>
            <View style={[GlobalStyles.rowAround]}>
                <CardValue title='Sexo' value={getPetGender(pet.gender)} icon='male-outline' />
                <CardValue title='Color' value={pet.color} icon='color-palette-outline' />
            </View>
            <View style={[GlobalStyles.rowAround]}>
                <CardValue title='Tamaño' value={getPetSize(pet.size)} icon='trending-up-outline' />
                <CardValue title='Chip' value={pet.chip === '' ? 'Sin chip' : pet.chip} icon='qr-code-outline' />
            </View>
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
});
