import React from 'react';
import { StyleSheet } from 'react-native';
import { RootStackLoginParamList } from '~navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '~shared/components/Container';
import Header from '~shared/components/Header';
import NewVisitForm from '~shared/components/NewVisitForm';
import useAddVisit from '~shared/hooks/useAddVisit';
import { NewVisit, Visit } from '~models/Visit';
import Loading from '~shared/components/Loading';
import useAuth from '~shared/hooks/useAuth';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AddVisitScreen'> {}

const AddVisitScreen = ({ route, navigation }: Props) => {
    const { loading, createVisit, updateVisit } = useAddVisit();
    const isUpdate = route.params.visit ? true : false;
    const currentVisit = route.params.visit ?? undefined;
    const { user } = useAuth();

    return (
        <Container>
            <Header title={!isUpdate ? 'Nueva Visita' : 'Actualizar Visita'} buttonBack />
            {loading ? (
                <Loading />
            ) : (
                <NewVisitForm
                    onSubmit={(data) => {
                        if (!isUpdate) {
                            const newVisit: NewVisit = {
                                //@ts-ignore
                                date: data.date,
                                createdBy: user?._id ? user._id : '',
                                vetId: user?.vetId ? user.vetId._id : '',
                                pet: route.params.pet,
                                anamnestic: String(data.anamnestic),
                                temperature: Number(data.temperature),
                                weight: Number(data.weight),
                                ...data,
                            };
                            createVisit(newVisit).then(() => navigation.replace('VisitsScreen', { id: newVisit.pet }));
                        } else {
                            const createdBy =
                                typeof currentVisit?.createdBy === 'string'
                                    ? currentVisit.createdBy
                                    : currentVisit?.createdBy._id;
                            const updVisit: Visit = {
                                ...currentVisit,
                                ...data,
                                createdBy: String(createdBy),
                                //@ts-ignore
                                date: currentVisit?.date,
                            };
                            updateVisit(updVisit).then((res) => {
                                navigation.replace('VisitsScreen', { id: res.pet });
                            });
                        }
                    }}
                    initData={currentVisit}
                    onCancel={() => navigation.goBack()}
                />
            )}
        </Container>
    );
};

export default AddVisitScreen;

const styles = StyleSheet.create({});
