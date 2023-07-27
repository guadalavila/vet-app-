import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import FormInput from './FormInput';
import useForm from '../hooks/useForm';
import Button from './Button';
import { colors } from '../utils/colors';
import { COLOR_PET, CONDITIONS, ColorType, GENDER, PetType, SIZE_PET, TYPE_PET } from '../utils/constants';
import Select from './Select';
import { GlobalStyles } from '../utils/styles';
import ListColors from './ListColors';
import ListItemsText from './ListItemsText';
import { ItemList } from '../../models/ItemList';
import ListTypePet from './ListTypePet';
import SearchBar from './SearchBar';
import { size } from '../utils/size';
import { typography } from '../utils/typography';
import useSearchClients from '../hooks/useSearchClients';
import ItemClient from './ItemClient';
import { Client } from '../../models/Client';
import Loading from './Loading';
import DropdownMultiple from './DropdownMultiple';
import { Pet } from '../../models/Pet';
import { PathologiesContext } from '../../contexts/PathologiesContext';
import { Pathology } from '../../models/Pathology';

interface INewPetFormProps {
    onSubmit: (fields: { [fieldName: string]: string | boolean | Date | any }) => void;
    client: Client | undefined;
    initData?: Pet;
    onCancel: () => void;
}

const NewPetForm: React.FC<INewPetFormProps> = ({ onSubmit, client, initData, onCancel }) => {
    const { fields, errors, setFieldValue, handleSubmit } = useForm('NetPet', onSubmit);
    const [isUpdate, setIsUpdate] = useState(false);
    const { searchClientsByDNI, activeSearching, result } = useSearchClients();
    const { pathologies } = useContext(PathologiesContext);
    const [type, setType] = useState<PetType>({
        ...TYPE_PET[TYPE_PET.length - 1],
    });
    const [sterilized, setSterilized] = useState(false);
    const [colorPet, setColorPet] = useState<ColorType>(COLOR_PET[COLOR_PET.length - 1]);
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
    const [dniOwner, setDniOwner] = useState(client?.dni ? client.name.concat(' ').concat(client.lastName) : '');
    const [selectDNI, setSelectDNI] = useState(false);

    useEffect(() => {
        setInitData();
    }, []);

    useEffect(() => {
        if (client && Object.entries(Object(initData)).length === 0) setFieldValue('client', client?._id);
    }, [client]);

    const setInitData = () => {
        if (Object.entries(Object(initData)).length > 0) {
            setIsUpdate(true);
            //@ts-ignore
            const { client, name, chip, specie, breed, gender, color, size, age, sterilized, pathologies } = initData;
            setFieldValue('client', client);
            name && setFieldValue('name', name);
            age && setFieldValue('age', String(age));
            chip && setFieldValue('chip', chip);
            breed && setFieldValue('breed', breed);

            color && setColorPet(COLOR_PET.find((x) => x.label === color) ?? COLOR_PET[COLOR_PET.length - 1]);
            color && setFieldValue('color', color);

            gender && setFieldValue('gender', gender);
            gender && setGenderPet(GENDER.find((x) => x.value === gender) ?? GENDER[0]);

            size && setFieldValue('size', size);
            size && setSizePet(SIZE_PET.find((x) => x.value === size) ?? SIZE_PET[0]);

            sterilized && setFieldValue('sterilized', sterilized);
            sterilized && setSterilized(sterilized);

            specie && setFieldValue('specie', specie);
            specie && setType(TYPE_PET.find((x) => x.value === specie) ?? TYPE_PET[TYPE_PET.length - 1]);
        }
    };
    return (
        <View style={GlobalStyles.flex1}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                {!isUpdate && (
                    <>
                        <SearchBar
                            keyboardType='number-pad'
                            editable={client?.dni ? false : true}
                            fullWidth
                            placeholder='DNI responsable'
                            value={dniOwner}
                            onChangeValue={(value) => {
                                setDniOwner(value);
                                if (Number(value) && value.length > 3) {
                                    searchClientsByDNI(value);
                                } else {
                                    setSelectDNI(false);
                                }
                            }}
                            clicked
                            setCLicked={() => {}}
                        />
                        <View style={styles.containerListClients}>
                            {/* {activeSearching && <Loading />} */}
                            {dniOwner.length > 3 && result && result.length > 0 && !selectDNI && (
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={result}
                                    renderItem={({ item }) => (
                                        <ItemClient
                                            client={item}
                                            onPress={() => {
                                                setDniOwner(item.name.concat(' ').concat(item.lastName));
                                                setFieldValue('client', item._id);
                                                setSelectDNI(true);
                                            }}
                                        />
                                    )}
                                    keyExtractor={(item) => item._id}
                                />
                            )}
                        </View>
                    </>
                )}
                <View style={styles.marginDefault}>
                    {errors.client && <Text style={styles.error}>{errors.client}</Text>}
                </View>
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
                        keyboardType='decimal-pad'
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
                    placeholder='Sexo'
                />
                <View style={styles.marginDefault}>
                    {errors.gender && <Text style={styles.error}>{errors.gender}</Text>}
                </View>
                <ListTypePet
                    selected={type}
                    setSelected={(item) => {
                        setType(item);
                        setFieldValue('specie', item.value);
                    }}
                />
                <View style={styles.marginDefault}>
                    {errors.specie && <Text style={styles.error}>{errors.specie}</Text>}
                </View>
                <FormInput
                    value={fields.breed || ''}
                    placeholder='Raza'
                    onChangeText={(value) => setFieldValue('breed', value)}
                />
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
                <ListItemsText
                    items={SIZE_PET}
                    item={sizePet}
                    setItem={(item) => {
                        setSizePet(item);
                        setFieldValue('size', item.value);
                    }}
                    placeholder='Porte'
                />
                <View style={styles.marginDefault}>
                    {errors.size && <Text style={styles.error}>{errors.size}</Text>}
                </View>
                <View style={styles.containerSelect}>
                    <Select
                        title='Esterilizado/a'
                        selected={sterilized}
                        onChangeSelect={() => {
                            setSterilized(!sterilized);
                            setFieldValue('sterilized', !sterilized);
                        }}
                    />
                </View>
                {pathologies.length > 0 && (
                    <DropdownMultiple
                        zIndex={1000}
                        initialItems={pathologies.map((x) => {
                            return { ...x, value: x.name, label: x.name };
                        })}
                        placeholder='Patologías preexistentes'
                        initValue={initData?.pathologies as Pathology[]}
                        onChangeValues={(data) => {
                            setFieldValue('pathologies', data);
                        }}
                    />
                )}
                <FormInput
                    isTextArea
                    value={fields.notes || ''}
                    placeholder='Notas y observaciones'
                    onChangeText={(value) => setFieldValue('notes', value)}
                />
            </ScrollView>
            <View style={styles.bottom}>
                <Button title={'Guardar'} onPress={handleSubmit} />
                <Button secondary title={'Cancelar'} onPress={onCancel} />
            </View>
        </View>
    );
};

export default NewPetForm;

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 140,
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
    containerListClients: {
        marginTop: -12,
        marginHorizontal: size.XXL,
        borderRadius: 4,
    },
    containerSelect: {
        marginVertical: size.XL,
    },
});
