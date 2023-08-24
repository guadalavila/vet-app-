import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '~shared/utils/styles';
import useForm from '../hooks/useForm';
import FormInput from './FormInput';
import ItemDate from './ItemDate';
import Button from './Button';
import { Surgery } from '~models/Surgery';
import { size } from '~shared/utils/size';
import { colors } from '~shared/utils/colors';
import { typography } from '~shared/utils/typography';

interface INewSurgeryFormProps {
    onSubmit: (fields: { [fieldName: string]: string | boolean | Date | any }) => void;
    initData?: Surgery;
}

const NewSurgeryForm = ({ onSubmit, initData }: INewSurgeryFormProps) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm('NewSurgeryForm', onSubmit);

    useEffect(() => {
        setFieldValue('date', new Date());
        setInitialData();
    }, []);

    const setInitialData = () => {
        if (Object.entries(Object(initData)).length > 0) {
        }
    };

    return (
        <View style={GlobalStyles.flex1}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                {<ItemDate onChangeValue={(value) => setFieldValue('date', value)} />}
                <FormInput
                    isTextArea
                    required
                    value={fields.description || ''}
                    placeholder='Descripción del procedimiento'
                    onChangeText={(value) => setFieldValue('description', value)}
                />
                <View style={styles.marginDefault}>
                    {errors.description && <Text style={styles.error}>{errors.description}</Text>}
                </View>
                <FormInput
                    isTextArea
                    value={fields.medicines || ''}
                    placeholder='Medicamentos utilizados'
                    onChangeText={(value) => setFieldValue('medicines', value)}
                />
                <FormInput
                    isTextArea
                    value={fields.notes || ''}
                    placeholder='Notas y observaciones'
                    onChangeText={(value) => setFieldValue('notes', value)}
                />
            </ScrollView>
            <View style={styles.bottom}>
                <Button title={'Guardar'} onPress={handleSubmit} />
            </View>
        </View>
    );
};

export default NewSurgeryForm;

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 100,
    },
    bottom: {
        // marginTop: 20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    marginDefault: {
        marginHorizontal: size.XXL,
    },
    error: {
        color: colors.light.error,
        fontSize: typography.size.S,
        marginBottom: size.L,
    },
});
