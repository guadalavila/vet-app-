import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import ItemVisit from '../../shared/components/ItemVisit';
import { colors } from '../../shared/utils/colors';
import { size } from '../../shared/utils/size';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'VisitsScreen'> {}

const VisitsScreen = ({}: Props) => {
    return (
        <Container>
            <Header title='Historial' buttonBack />
            <ItemVisit />
        </Container>
    );
};

export default VisitsScreen;

const styles = StyleSheet.create({});
