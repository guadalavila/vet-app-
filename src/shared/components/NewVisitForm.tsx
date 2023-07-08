import React, { useCallback, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FormInput from './FormInput';
import useForm from '../hooks/useForm';
import Button from './Button';
import { THEME_CUSTOM_CALENDAR, colors } from '../utils/colors';
import { Calendar, LocaleConfig } from 'react-native-calendars';

import CustomText from './CustomText';
import { CONFIG_MONTHS_DAYS, LOCALE_CONFIG } from '../utils/calendar';
import { size } from '../utils/size';
import Icon from 'react-native-vector-icons/Ionicons';
import ItemDate from './ItemDate';
import { GlobalStyles } from '../utils/styles';

LocaleConfig.locales[LOCALE_CONFIG] = { ...CONFIG_MONTHS_DAYS };
LocaleConfig.defaultLocale = LOCALE_CONFIG;
interface INewVisitFormProps {
    onSubmit: (fields: { [fieldName: string]: string | boolean | Date }) => void;
}

const NewVisitForm: React.FC<INewVisitFormProps> = ({ onSubmit }) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm('NewVisit', onSubmit);
    const [showCalendar, setShowCalendar] = useState(false);
    const [dateVisit, setDateVisit] = useState<any>();
    const [selectedValue, setSelectedValue] = useState(new Date());

    // const getNewSelectedDate = useCallback(
    //     (date, shouldAdd) => {
    //         const newMonth = new Date(date).getMonth();
    //         const month = shouldAdd ? newMonth + 1 : newMonth - 1;
    //         const newDate = new Date(selectedValue.setMonth(month));
    //         const newSelected = new Date(newDate.setDate(1));
    //         return newSelected;
    //     },
    //     [selectedValue],
    // );

    return (
        <View style={GlobalStyles.flex1}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                <ItemDate />
                <View style={GlobalStyles.row}>
                    <FormInput
                        width={'43%'}
                        required
                        value={fields.weight || ''}
                        placeholder='Peso'
                        onChangeText={(value) => setFieldValue('weight', value)}
                    />
                    {errors.weight && <Text style={styles.error}>{errors.weight}</Text>}
                    <FormInput
                        width={'43%'}
                        required
                        value={fields.temperature || ''}
                        placeholder='Temperatura'
                        onChangeText={(value) => setFieldValue('temperature', value)}
                    />
                    {errors.temperature && <Text style={styles.error}>{errors.temperature}</Text>}
                </View>
                <FormInput
                    isTextArea
                    required
                    value={fields.anamnestic || ''}
                    placeholder='Anamnésicos'
                    onChangeText={(value) => setFieldValue('anamnestic', value)}
                />
                {errors.anamnestic && <Text style={styles.error}>{errors.anamnestic}</Text>}
                <FormInput
                    isTextArea
                    value={fields.diagnosis || ''}
                    placeholder='Diagnóstico Diferencial'
                    onChangeText={(value) => setFieldValue('diagnosis', value)}
                />
                {errors.diagnosis && <Text style={styles.error}>{errors.diagnosis}</Text>}
                <FormInput
                    isTextArea
                    value={fields.treatment || ''}
                    placeholder='Tratamiento'
                    onChangeText={(value) => setFieldValue('treatment', value)}
                />
                {errors.treatment && <Text style={styles.error}>{errors.treatment}</Text>}
                <FormInput
                    isTextArea
                    value={fields.hospitalization || ''}
                    placeholder='Hospitalización'
                    onChangeText={(value) => setFieldValue('hospitalization', value)}
                />
                {errors.hospitalization && <Text style={styles.error}>{errors.hospitalization}</Text>}
            </ScrollView>
            <View style={styles.bottom}>
                <Button title='Agregar Visita' onPress={handleSubmit} />
            </View>
        </View>
    );
};

export default NewVisitForm;

const styles = StyleSheet.create({
    error: {
        color: colors.light.error,
    },
    bottom: {
        // marginTop: 20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    contentContainer: {
        paddingBottom: 100,
    },
});
