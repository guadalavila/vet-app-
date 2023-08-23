import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~shared/utils/colors';
import { size } from '~shared/utils/size';
import { typography } from '~shared/utils/typography';
import CustomText from './CustomText';
import { GlobalStyles } from '~shared/utils/styles';
import { Visit } from '~models/Visit';
import CardValue from './CardValue';
import Separator from './Separator';

interface IItemVisitProps {
    visit: Visit;
    open?: boolean;
    editVisit: () => void;
}

const ItemVisit = ({ visit, open = false, editVisit }: IItemVisitProps) => {
    const [isOpen, setIsOpen] = useState(open);
    return (
        <View>
            <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={() => setIsOpen(!isOpen)}>
                <CustomText style={styles.date}>
                    {new Date(visit.date).toLocaleString('en-GB', {
                        hour12: false,
                    })}
                </CustomText>
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
                        <TouchableOpacity activeOpacity={0.7} style={styles.buttonEdit} onPress={editVisit}>
                            <CustomText style={GlobalStyles.textCenter}>Editar</CustomText>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerDetail}>
                        <View style={GlobalStyles.row}>
                            <CustomText style={styles.title}>Anamnésicos</CustomText>
                            <CustomText style={styles.detail}>{visit.anamnestic}</CustomText>
                        </View>
                        <Separator color='transparent' />
                        <View style={GlobalStyles.row}>
                            <CustomText style={styles.title}>Diagnóstico Diferencial</CustomText>
                            <CustomText style={styles.detail}>
                                {visit.diagnosis ? visit.diagnosis : 'No especificado'}
                            </CustomText>
                        </View>
                        <Separator color='transparent' />
                        <View style={GlobalStyles.row}>
                            <CustomText style={styles.title}>Tratamiento</CustomText>
                            <CustomText style={styles.detail}>
                                {visit.treatment ? visit.treatment : 'No especificado'}
                            </CustomText>
                        </View>
                        <Separator color='transparent' />
                        <View style={GlobalStyles.row}>
                            <CustomText style={styles.title}>Hospitalización</CustomText>
                            <CustomText style={styles.detail}>
                                {visit.hospitalization ? visit.hospitalization : 'No especificado'}
                            </CustomText>
                        </View>
                        <Separator color='transparent' />
                        <View style={GlobalStyles.row}>
                            <CustomText style={styles.title}>Atendido por</CustomText>
                            {typeof visit.createdBy !== 'string' && (
                                <CustomText style={styles.detail}>
                                    {visit.createdBy.name} {visit.createdBy.lastName}
                                </CustomText>
                            )}
                        </View>
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
        marginVertical: size.L,
    },
    date: {
        fontSize: typography.size.M,
        fontWeight: 'bold',
        color: colors.light.white,
    },
    title: {
        fontWeight: 'bold',
        fontSize: typography.size.S,
        marginBottom: size.M,
        width: '38%',
    },
    detail: {
        fontWeight: '600',
        alignSelf: 'center',
    },
    buttonEdit: {
        borderColor: colors.light.primary,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        width: '20%',
        padding: size.M,
        alignSelf: 'center',
    },
});
