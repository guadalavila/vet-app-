import React from 'react';
import { ScrollView } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import useGetReport from '../../shared/hooks/useGetReport';
import Loading from '../../shared/components/Loading';
import PieItem from '../../shared/components/PieItem';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'ReportsScreen'> {}

const ReportsScreen = ({}: Props) => {
    const { loading, gender, specie } = useGetReport();

    return (
        <Container>
            <Header buttonBack title='Reportes' />
            {loading ? (
                <Loading />
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    {gender && (
                        <PieItem
                            title='Ingresos por Sexo'
                            data={{ serie: gender.serie, colors: gender.serieColor, texts: gender.serieText }}
                        />
                    )}
                    {specie && (
                        <PieItem
                            title='Ingresos por Especie'
                            data={{ serie: specie.serie, colors: specie.serieColor, texts: specie.serieText }}
                        />
                    )}
                </ScrollView>
            )}
        </Container>
    );
};

export default ReportsScreen;
