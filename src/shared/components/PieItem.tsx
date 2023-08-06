import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { size } from '../utils/size';
import Title from './Title';
import PieChart from 'react-native-pie-chart';
import { GlobalStyles } from '../utils/styles';
import CustomText from './CustomText';
const screenWidth = Dimensions.get('window').width;
const widthAndHeight = screenWidth * 0.6;

interface IPieItem {
    title: string;
    data: {
        serie: number[],
        colors: string[],
        texts: string[],
    };
}

const PieItem = ({ title, data: { serie, colors, texts } }: IPieItem) => {
    return (
        <View>
            <View style={styles.container}>
                <Title text={title} />
                <PieChart widthAndHeight={widthAndHeight} series={serie} sliceColor={colors} />
            </View>
            <View style={GlobalStyles.rowAround}>
                {serie.map((item, index) => (
                    <>
                        <View style={GlobalStyles.row} key={index}>
                            <View style={[styles.containerText, { backgroundColor: colors[index] }]} />
                            <CustomText>
                                {serie[index]} {texts[index]}
                            </CustomText>
                        </View>
                    </>
                ))}
            </View>
        </View>
    );
};

export default PieItem;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        marginVertical: size.XL,
    },
    containerText: {
        marginRight: size.XL,
        width: 20,
        height: 20,
    },
});
