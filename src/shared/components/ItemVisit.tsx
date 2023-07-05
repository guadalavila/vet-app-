import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/colors';
import { size } from '../utils/size';
import { typography } from '../utils/typography';
import CustomText from './CustomText';
import { GlobalStyles } from '../utils/styles';
import { Visit } from '../../models/Visit';
import CardValue from './CardValue';
import Separator from './Separator';

interface IItemVisitProps {
    visit: Visit;
    open?: boolean;
}

const ItemVisit = ({ visit, open = false }: IItemVisitProps) => {
    const [isOpen, setIsOpen] = useState(open);
    return (
        <View>
            <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={() => setIsOpen(!isOpen)}>
                <CustomText style={styles.date}>{new Date(visit.date).toLocaleString()}</CustomText>
                <Icon
                    name={!isOpen ? 'chevron-down-outline' : 'chevron-up-outline'}
                    size={24}
                    color={colors.light.white}
                />
            </TouchableOpacity>
            {isOpen && (
                <View>
                    <View style={[GlobalStyles.rowAround]}>
                        <CardValue
                            title='Peso'
                            value={String(visit.weight)}
                            valueExtra=' kgs'
                            icon='analytics-outline'
                        />
                        <CardValue
                            title='Temperatura'
                            value={String(visit.temperature)}
                            valueExtra='ºC'
                            icon='thermometer-outline'
                        />
                    </View>
                    <View style={styles.containerDetail}>
                        <CustomText style={styles.title}>Anamnésicos:</CustomText>
                        <CustomText style={styles.detail}>{visit.anamnestic}</CustomText>
                        <Separator color='transparent' />
                        <CustomText style={styles.title}>Diagnóstico Diferencia:</CustomText>
                        <CustomText style={styles.detail}>{visit.diagnosis}</CustomText>
                        <Separator color='transparent' />
                        <CustomText style={styles.title}>Tratamiento:</CustomText>
                        <CustomText style={styles.detail}>{visit.treatment}</CustomText>
                        <Separator color='transparent' />
                        <CustomText style={styles.title}>Hospitalización:</CustomText>
                        <CustomText style={styles.detail}>{visit.hospitalization}</CustomText>
                    </View>
                </View>
            )}
        </View>
    );
};

export default ItemVisit;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light.primary,
        padding: size.XL,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: size.S,
    },
    containerDetail: {
        marginHorizontal: size.XL,
        paddingVertical: size.M,
    },
    date: {
        fontSize: typography.size.M,
        fontWeight: 'bold',
        color: colors.light.white,
    },
    title: {
        fontWeight: 'bold',
        fontSize: typography.size.S,
        textDecorationLine: 'underline',
        marginBottom: size.M,
    },
    detail: {
        fontWeight: '600',
    },
});
