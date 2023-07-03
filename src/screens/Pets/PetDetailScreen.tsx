import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import Card from '../../shared/components/Card';
import CustomText from '../../shared/components/CustomText';
import Header from '../../shared/components/Header';
import Avatar from '../../shared/components/Avatar';
import { getPetGender, getPetSize, getPetType } from '../../shared/utils/helpers';
import { typography } from '../../shared/utils/typography';
import Button from '../../shared/components/Button';
import InfoPet from '../../shared/components/InfoPet';
import Separator from '../../shared/components/Separator';
import { GlobalStyles } from '../../shared/utils/styles';
import { colors } from '../../shared/utils/colors';
import { size } from '../../shared/utils/size';
import Icon from 'react-native-vector-icons/Ionicons';
import CardValue from '../../shared/components/CardValue';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'PetDetailScreen'> {}

const PetDetailScreen = ({ route }: Props) => {
    const pet = route.params.pet;
    return (
        <Container>
            <Header title="Reporte" buttonBack />
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
            <Separator color="transparent" />
            <View style={styles.button}>
                <Button onPress={() => {}} title='Nueva Visita' />
            </View>
        </Container>
    );
};

export default PetDetailScreen;

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    name: {
        fontSize: typography.size.L,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    type: {
        fontSize: typography.size.M,
        textAlign: 'center',
        fontWeight: '600',
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
    textRelative: {
        position: 'relative',
        bottom: 110,
        fontSize: typography.size.M,
        textDecorationLine: 'underline',
        color: colors.light.secondary,
    },
});
