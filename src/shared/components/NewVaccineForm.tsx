import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '~shared/utils/styles';
import useForm from '../hooks/useForm';
import FormInput from './FormInput';
import ItemDate from './ItemDate';
import Button from './Button';
import Dropdown from './Dropdown';
import Separator from './Separator';
import { VACCINES_PET } from '~shared/utils/const/vaccine';
import { size } from '~shared/utils/size';
import { colors } from '~shared/utils/colors';
import { typography } from '~shared/utils/typography';
import { Vaccine } from '~models/Vaccine';

interface INewVaccineFormProps {
    onSubmit: (fields: { [fieldName: string]: string | boolean | Date | any }) => void;
    initData?: Vaccine;
}

const NewVaccineForm = ({ onSubmit, initData }: INewVaccineFormProps) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm('NewVaccineForm', onSubmit);

    useEffect(() => {
        setFieldValue('date', new Date());
        setInitialData();
    }, []);

    const setInitialData = () => {
        if (Object.entries(Object(initData)).length > 0) {
            //@ts-ignore
            const { name, type, brand, details } = initData;
            setFieldValue('name', name);
            setFieldValue('type', type);

            brand && setFieldValue('brand', brand);
            details && setFieldValue('details', details);
        }
    };

    return (
        <View style={GlobalStyles.flex1}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                {!initData?.createdAt && (
                    <ItemDate
                        placeholder='Fecha de administración'
                        onChangeValue={(value) => setFieldValue('date', value)}
                    />
                )}
                <Separator color='transparent' />
                <Dropdown
                    placeholder='Tipo de vacuna'
                    items={VACCINES_PET}
                    initValue={initData?.type}
                    onSelectItem={(select) => {
                        setFieldValue('type', select.value);
                    }}
                    setItems={() => {}}
                />
                <View style={styles.marginDefault}>
                    {errors.type && <Text style={styles.error}>{errors.type}</Text>}
                </View>
                <FormInput
                    required
                    value={fields.name || ''}
                    placeholder='Nombre de la vacuna'
                    onChangeText={(value) => setFieldValue('name', value)}
                />
                <View style={styles.marginDefault}>
                    {errors.name && <Text style={styles.error}>{errors.name}</Text>}
                </View>
                <FormInput
                    value={fields.lotNumber || ''}
                    placeholder='Marca y N° de lote'
                    keyboardType='decimal-pad'
                    onChangeText={(value) => setFieldValue('lotNumber', value)}
                />
                <FormInput
                    isTextArea
                    value={fields.notes || ''}
                    placeholder='Detalles adicionales'
                    onChangeText={(value) => setFieldValue('notes', value)}
                />
            </ScrollView>
            <View style={styles.bottom}>
                <Button title={'Guardar'} onPress={handleSubmit} />
            </View>
        </View>
    );
};

export default NewVaccineForm;

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
