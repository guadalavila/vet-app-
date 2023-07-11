import React from 'react';
import { StyleSheet } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import NewVisitForm from '../../shared/components/NewVisitForm';
import useAddVisit from '../../shared/hooks/useAddVisit';
import { NewVisit } from '../../models/Visit';
import Loading from '../../shared/components/Loading';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AddVisitScreen'> {}

const AddVisitScreen = ({ route, navigation }: Props) => {
    const { loading, createVisit } = useAddVisit();
    return (
        <Container>
            <Header title='Nueva Visita' buttonBack />
            {loading ? (
                <Loading />
            ) : (
                <NewVisitForm
                    onSubmit={(data) => {
                        const newVisit: NewVisit = {
                            //@ts-ignore
                            date: data.date,
                            anamnestic: String(data.anamnestic),
                            diagnosis: data.diagnosis ? String(data.diagnosis) : '',
                            hospitalization: data.hospitalization ? String(data.hospitalization) : '',
                            client: route.params.client,
                            pet: route.params.pet,
                            temperature: Number(data.temperature),
                            weight: Number(data.weight),
                            treatment: data.treatment ? String(data.treatment) : '',
                        };
                        createVisit(newVisit).then(() => navigation.goBack());
                    }}
                />
            )}
        </Container>
    );
};

export default AddVisitScreen;

const styles = StyleSheet.create({});
