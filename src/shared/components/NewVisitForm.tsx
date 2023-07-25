import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FormInput from './FormInput';
import useForm from '../hooks/useForm';
import Button from './Button';

import ItemDate from './ItemDate';
import { GlobalStyles } from '../utils/styles';
import { colors } from '../utils/colors';
import { typography } from '../utils/typography';
import { size } from '../utils/size';
import { Visit } from '../../models/Visit';

interface INewVisitFormProps {
    onSubmit: (fields: { [fieldName: string]: string | boolean | Date }) => void;
    initData?: Visit;
    onCancel: () => void;
}

const NewVisitForm: React.FC<INewVisitFormProps> = ({ onSubmit, initData, onCancel }) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm('NewVisit', onSubmit);

    useEffect(() => {
        setInitialData();
        setFieldValue('date', new Date());
    }, []);

    const setInitialData = () => {
        if (Object.entries(Object(initData)).length > 0) {
            //@ts-ignore
            const { anamnestic, diagnosis, hospitalization, temperature, treatment, weight } = initData;
            setFieldValue('anamnestic', anamnestic);
            diagnosis && setFieldValue('diagnosis', diagnosis);
            hospitalization && setFieldValue('hospitalization', hospitalization);
            setFieldValue('weight', String(weight));
            setFieldValue('temperature', String(temperature));
            treatment && setFieldValue('treatment', treatment);
        }
    };

    return (
        <View style={GlobalStyles.flex1}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                {!initData?.createdAt && <ItemDate onChangeValue={(value) => setFieldValue('date', value)} />}
                <View style={GlobalStyles.row}>
                    <FormInput
                        width={'43%'}
                        required
                        keyboardType='decimal-pad'
                        value={fields.weight || ''}
                        placeholder='Peso'
                        onChangeText={(value) => setFieldValue('weight', value)}
                    />
                    <FormInput
                        width={'43%'}
                        required
                        keyboardType='decimal-pad'
                        value={fields.temperature || ''}
                        placeholder='Temperatura'
                        onChangeText={(value) => setFieldValue('temperature', value)}
                    />
                </View>
                <View style={styles.marginDefault}>
                    {errors.weight && <Text style={styles.error}>{errors.weight}</Text>}
                </View>
                <View style={styles.marginDefault}>
                    {errors.temperature && <Text style={styles.error}>{errors.temperature}</Text>}
                </View>
                <FormInput
                    isTextArea
                    required
                    value={fields.anamnestic || ''}
                    placeholder='Anamnesis'
                    onChangeText={(value) => setFieldValue('anamnestic', value)}
                />
                <View style={styles.marginDefault}>
                    {errors.anamnestic && <Text style={styles.error}>{errors.anamnestic}</Text>}
                </View>
                <FormInput
                    isTextArea
                    value={fields.diagnosis || ''}
                    placeholder='Diagnóstico Diferencial'
                    onChangeText={(value) => setFieldValue('diagnosis', value)}
                />
                <FormInput
                    isTextArea
                    value={fields.treatment || ''}
                    placeholder='Tratamiento'
                    onChangeText={(value) => setFieldValue('treatment', value)}
                />
                <FormInput
                    isTextArea
                    value={fields.hospitalization || ''}
                    placeholder='Hospitalización'
                    onChangeText={(value) => setFieldValue('hospitalization', value)}
                />
            </ScrollView>
            <View style={styles.bottom}>
                <Button title={'Guardar'} onPress={handleSubmit} />
                <Button secondary title={'Cancelar'} onPress={onCancel} />
            </View>
        </View>
    );
};

export default NewVisitForm;

const styles = StyleSheet.create({
    error: {
        color: colors.light.error,
        fontSize: typography.size.S,
        marginBottom: size.L,
    },
    bottom: {
        // marginTop: 20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    contentContainer: {
        paddingBottom: 140,
    },
    marginDefault: {
        marginHorizontal: size.XXL,
    },
});
