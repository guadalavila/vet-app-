import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import FormInput from './FormInput';
import useForm from '../hooks/useForm';
import Button from './Button';
import { colors } from '../utils/colors';
import { COLOR_PET, CONDITIONS, GENDER, SIZE_PET, TYPE_PET } from '../utils/constants';
import Dropdown from './Dropdown';
import DropdownMultiple from './DropdownMultiple';
import Select from './Select';

interface INewPetFormProps {
    onSubmit: (fields: { [fieldName: string]: string | boolean | Date }) => void;
}

const NewPetForm: React.FC<INewPetFormProps> = ({ onSubmit }) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm(onSubmit);
    const [gender, setGender] = useState(GENDER);
    const [type, setType] = useState(TYPE_PET);
    const [size, setSize] = useState(SIZE_PET);
    const [color, setColor] = useState(COLOR_PET);
    const [conditions, setConditions] = useState(CONDITIONS);

    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false}>
                <FormInput
                    required
                    value={fields.name || ''}
                    placeholder='Nombre'
                    onChangeText={(value) => setFieldValue('name', value)}
                />
                {errors.name && <Text style={styles.error}>{errors.name}</Text>}
                <FormInput
                    value={fields.chip || ''}
                    placeholder='Chip'
                    onChangeText={(value) => setFieldValue('chip', value)}
                />
                {errors.chip && <Text style={styles.error}>{errors.chip}</Text>}
                <FormInput
                    required
                    value={fields.age || ''}
                    placeholder='Edad'
                    onChangeText={(value) => setFieldValue('age', value)}
                />
                {errors.age && <Text style={styles.error}>{errors.age}</Text>}
                <Dropdown
                    onSelectItem={(value) => setFieldValue('gender', value)}
                    zIndex={2000}
                    items={gender}
                    setItems={setGender}
                    placeholder='Sexo'
                />
                <Dropdown
                    onSelectItem={(value) => setFieldValue('type', value)}
                    zIndex={1000}
                    items={type}
                    setItems={setType}
                    placeholder='Especie'
                />
                <FormInput
                    required
                    value={fields.race || ''}
                    placeholder='Raza'
                    onChangeText={(value) => setFieldValue('race', value)}
                />
                {errors.race && <Text style={styles.error}>{errors.race}</Text>}
                <Dropdown
                    onSelectItem={(value) => setFieldValue('size', value)}
                    zIndex={500}
                    items={size}
                    setItems={setSize}
                    placeholder='Porte'
                />
                <Dropdown
                    onSelectItem={(value) => setFieldValue('color', value)}
                    zIndex={200}
                    items={color}
                    setItems={setColor}
                    placeholder='Color'
                />
                <DropdownMultiple
                    onSelectItems={(values) => console.log(values)}
                    zIndex={1000}
                    items={conditions}
                    setItems={setConditions}
                    placeholder='Condiciones'
                />
                <Select title='Castrado/a' selected={false} onChangeSelect={() => console.log('')} />
            </ScrollView>
            <View style={styles.bottom}>
                <Button title='Agregar Visita' onPress={handleSubmit} />
            </View>
        </>
    );
};

export default NewPetForm;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    error: {
        color: colors.light.error,
    },
    bottom: {
        marginTop: 20,
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
});
