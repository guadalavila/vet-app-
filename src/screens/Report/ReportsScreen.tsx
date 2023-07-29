import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import { Dimensions } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { size } from '../../shared/utils/size';
import Title from '../../shared/components/Title';
import useGetReport from '../../shared/hooks/useGetReport';
import Loading from '../../shared/components/Loading';
import CustomText from '../../shared/components/CustomText';
import { GlobalStyles } from '../../shared/utils/styles';
const screenWidth = Dimensions.get('window').width;
const widthAndHeight = screenWidth * 0.6;

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
                        <>
                            <View style={styles.container}>
                                <Title text='Ingresos por Sexo ' />
                                <PieChart
                                    widthAndHeight={widthAndHeight}
                                    series={gender.serie}
                                    sliceColor={gender.serieColor}
                                />
                            </View>
                            <View style={GlobalStyles.rowAround}>
                                {gender.serie.map((item, index) => (
                                    <>
                                        <View style={GlobalStyles.row} key={index}>
                                            <View
                                                style={{
                                                    marginRight: size.XL,
                                                    width: 20,
                                                    height: 20,
                                                    backgroundColor: gender.serieColor[index],
                                                }}></View>
                                            <CustomText>
                                                {gender.serie[index]} {gender.serieText[index]}
                                            </CustomText>
                                        </View>
                                    </>
                                ))}
                            </View>
                        </>
                    )}
                    {specie && (
                        <>
                            <View style={styles.container}>
                                <Title text='Ingresos por Especie ' />
                                <PieChart
                                    widthAndHeight={widthAndHeight}
                                    series={specie.serie}
                                    sliceColor={specie.serieColor}
                                />
                            </View>
                            <View style={GlobalStyles.rowAround}>
                                {specie.serie.map((item, index) => (
                                    <>
                                        <View style={GlobalStyles.row} key={index}>
                                            <View
                                                style={{
                                                    marginRight: size.XL,
                                                    width: 20,
                                                    height: 20,
                                                    backgroundColor: specie.serieColor[index],
                                                }}></View>
                                            <CustomText>
                                                {specie.serie[index]} {specie.serieText[index]}
                                            </CustomText>
                                        </View>
                                    </>
                                ))}
                            </View>
                        </>
                    )}
                </ScrollView>
            )}
        </Container>
    );
};

export default ReportsScreen;

const styles = StyleSheet.create({
    container: { alignSelf: 'center', marginVertical: size.XL },
});
