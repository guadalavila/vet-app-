import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import FormInput from './FormInput';
import useForm from '../hooks/useForm';
import Button from './Button';
import { colors } from '../utils/colors';
import { COLOR_PET, CONDITIONS, GENDER, PetType, SIZE_PET, TYPE_PET } from '../utils/constants';
import Dropdown from './Dropdown';
import DropdownMultiple from './DropdownMultiple';
import Select from './Select';
import { GlobalStyles } from '../utils/styles';
import ListColors from './ListColors';
import ListItemsText from './ListItemsText';
import { ItemList } from '../../models/ItemList';
import ListTypePet from './ListTypePet';
import SearchBar from './SearchBar';
import CustomText from './CustomText';
import { size } from '../utils/size';
import { typography } from '../utils/typography';

interface INewPetFormProps {
    onSubmit: (fields: { [fieldName: string]: string | boolean | Date }) => void;
}

const NewPetForm: React.FC<INewPetFormProps> = ({ onSubmit }) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm('NetPet', onSubmit);
    const [type, setType] = useState<PetType>({
        ...TYPE_PET[TYPE_PET.length - 1],
    });
    const [conditions, setConditions] = useState([]);
    const [sterilized, setSterilized] = useState(false);
    const [colorPet, setColorPet] = useState('');
    const [sizePet, setSizePet] = useState<ItemList>({
        label: '',
        value: '',
        code: '',
    });
    const [genderPet, setGenderPet] = useState<ItemList>({
        label: '',
        value: '',
        code: '',
    });
    const [dniOwner, setDniOwner] = useState('');

    useEffect(() => {
        if (dniOwner.length >= 3) {
            // searchPets(textSearch);
        }
    }, [dniOwner]);

    return (
        <View style={GlobalStyles.flex1}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                <SearchBar
                    fullWidth
                    placeholder='DNI responsable'
                    value={dniOwner}
                    onChangeValue={setDniOwner}
                    clicked
                    setCLicked={() => {}}
                />
                <FormInput
                    required
                    value={fields.name || ''}
                    placeholder='Nombre'
                    onChangeText={(value) => setFieldValue('name', value)}
                />
                <View style={styles.marginDefault}>
                    {errors.name && <Text style={styles.error}>{errors.name}</Text>}
                </View>
                <View style={GlobalStyles.row}>
                    <FormInput
                        width={'43%'}
                        value={fields.age || ''}
                        placeholder='Edad'
                        onChangeText={(value) => setFieldValue('age', value)}
                    />
                    <FormInput
                        width={'43%'}
                        value={fields.chip || ''}
                        placeholder='Chip'
                        onChangeText={(value) => setFieldValue('chip', value)}
                    />
                </View>
                <View style={styles.marginDefault}>{errors.age && <Text style={styles.error}>{errors.age}</Text>}</View>
                <ListItemsText
                    items={GENDER}
                    item={genderPet}
                    setItem={(item) => {
                        setFieldValue('gender', item.value);
                        setGenderPet(item);
                    }}
                    placeholder='Seleccione sexo'
                />
                <View style={styles.marginDefault}>
                    {errors.gender && <Text style={styles.error}>{errors.gender}</Text>}
                </View>
                <ListTypePet
                    selected={type}
                    setSelected={(item) => {
                        setType(item);
                        setFieldValue('type', item.value);
                    }}
                />
                <View style={styles.marginDefault}>
                    {errors.type && <Text style={styles.error}>{errors.type}</Text>}
                </View>
                <ListColors
                    colorPet={colorPet}
                    setColorPet={(item) => {
                        setColorPet(item);
                        setFieldValue('color', item.value);
                    }}
                />
                <View style={styles.marginDefault}>
                    {errors.color && <Text style={styles.error}>{errors.color}</Text>}
                </View>
                <FormInput
                    value={fields.race || ''}
                    placeholder='Raza'
                    onChangeText={(value) => setFieldValue('race', value)}
                />
                <ListItemsText
                    items={SIZE_PET}
                    item={sizePet}
                    setItem={(item) => {
                        setSizePet(item);
                        setFieldValue('size', item.value);
                    }}
                    placeholder='Seleccione porte'
                />
                <View style={styles.marginDefault}>
                    {errors.size && <Text style={styles.error}>{errors.size}</Text>}
                </View>
                {/* <DropdownMultiple
                    onSelectItems={(values) => setFieldValue('conditions', values)}
                    zIndex={1000}
                    items={CONDITIONS}
                    setItems={(list) => {
                        // setConditions();
                        // console.log(list);
                        // setFieldValue('conditions', CONDITIONS);
                    }}
                    placeholder='Condiciones'
                /> */}
                <Select
                    title='Esterilizado/a'
                    selected={sterilized}
                    onChangeSelect={() => setSterilized(!sterilized)}
                />
            </ScrollView>
            <View style={styles.bottom}>
                <Button title='Agregar Mascota' onPress={handleSubmit} />
            </View>
        </View>
    );
};

export default NewPetForm;

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 100,
    },
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
    marginDefault: {
        marginHorizontal: size.XXL,
    },
});
