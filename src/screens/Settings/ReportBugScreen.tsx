import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { RootStackLoginParamList } from '~navigations/types';
import Container from '~shared/components/Container';
import Header from '~shared/components/Header';
import NewBugForm from '~shared/components/NewBugForm';
import useAddIssue from '~shared/hooks/useAddIssue';
import Loading from '~shared/components/Loading';
import { Issue } from '~models/Issue';
import useAuth from '~shared/hooks/useAuth';
import ModalCustom from '~shared/components/ModalCustom';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'ReportBugScreen'> {}

const ReportBugScreen = ({ navigation }: Props) => {
    const { loading, createIssue } = useAddIssue();
    const { user } = useAuth();
    const [showModal, setShowModal] = useState(false);
    return (
        <Container>
            <Header title={'Reportar Incidencia'} buttonBack />
            {loading ? (
                <Loading />
            ) : (
                <NewBugForm
                    onSubmit={(data) => {
                        //TODO Call service
                        const issue: Issue = {
                            text: String(data.text),
                            userId: String(user?._id),
                            vetId: typeof user?.vetId === 'object' ? user.vetId._id : user?.vetId ?? '',
                        };
                        createIssue(issue)
                            .then(() => {
                                setShowModal(true);
                            })
                            .catch(() => navigation.goBack());
                    }}
                />
            )}
            <ModalCustom
                title='Incidencia reportada'
                visible={showModal}
                confirmButton={'Aceptar'}
                onConfirmPressed={() => navigation.goBack()}
            />
        </Container>
    );
};

export default ReportBugScreen;

const styles = StyleSheet.create({});
