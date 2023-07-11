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

interface INewVisitFormProps {
    onSubmit: (fields: { [fieldName: string]: string | boolean | Date }) => void;
}

const NewVisitForm: React.FC<INewVisitFormProps> = ({ onSubmit }) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm('NewVisit', onSubmit);

    useEffect(() => {
        setFieldValue('date', new Date());
    }, []);

    return (
        <View style={GlobalStyles.flex1}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                <ItemDate onChangeValue={(value) => setFieldValue('date', value)} />
                <View style={GlobalStyles.row}>
                    <FormInput
                        width={'43%'}
                        required
                        value={fields.weight || ''}
                        placeholder='Peso'
                        onChangeText={(value) => setFieldValue('weight', value)}
                    />
                    <FormInput
                        width={'43%'}
                        required
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
                    placeholder='Anamnésicos'
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
                <Button title='Agregar Visita' onPress={handleSubmit} />
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
        paddingBottom: 100,
    },
    marginDefault: {
        marginHorizontal: size.XXL,
    },
});
