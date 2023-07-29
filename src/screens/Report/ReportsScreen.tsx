import React from 'react';
import { ScrollView, View } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import useGetReport from '../../shared/hooks/useGetReport';
import Loading from '../../shared/components/Loading';
import PieItem from '../../shared/components/PieItem';
import ItemCategory from '../../shared/components/ItemCategory';
import { GlobalStyles } from '../../shared/utils/styles';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'ReportsScreen'> {}

const ReportsScreen = ({}: Props) => {
    const { loading, gender, specie, vaccines, visits } = useGetReport();

    return (
        <Container>
            <Header buttonBack title='Reportes' />
            {loading ? (
                <Loading />
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={GlobalStyles.row}>
                        {visits && (
                            <ItemCategory
                                data={visits}
                                height={150}
                                title={'Visitas en el último mes'}
                                backgroundColor={'#fb8351'}
                                onPress={() => {}}
                            />
                        )}
                        {vaccines && (
                            <ItemCategory
                                data={vaccines}
                                height={150}
                                backgroundColor={'#4E59D7'}
                                title={'Vacunas en el último mes'}
                                onPress={() => {}}
                            />
                        )}
                    </View>

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
