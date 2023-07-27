import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ItemType } from 'react-native-dropdown-picker';
import { ThemeContext } from '../../contexts/ThemeContext';
import { size } from '../utils/size';
import { colors } from '../utils/colors';
import { Pathology } from '../../models/Pathology';

interface IDropdownProps {
    placeholder: string;
    initialItems: ItemType<any>[];
    onChangeValues: (data: any[]) => void;
    required?: boolean;
    zIndex?: number;
    initValue?: Pathology[];
}

const DropdownMultiple = ({
    placeholder,
    initialItems,
    required,
    zIndex,
    initValue = [],
    onChangeValues,
}: IDropdownProps) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string[] | null>(null);
    const [items, setItems] = useState(initialItems);
    const { theme } = useContext(ThemeContext);
    const [valueSelected, setValueSelected] = useState<string[]>([]);

    useEffect(() => {
        if (initValue.length > 0) setValue(initValue.map((value) => value.name));
    }, []);

    useEffect(() => {
        if (value) {
            value.forEach((x) => {
                setValueSelected([]);
                const item = initialItems.find((item) => item.label === x);
                //@ts-ignore
                if (item) valueSelected.push(item._id);
            });
            onChangeValues && onChangeValues(valueSelected);
        }
    }, [value]);

    return (
        <DropDownPicker
            searchable
            searchPlaceholder='Buscar...'
            searchTextInputStyle={{ marginVertical: size.L, paddingVertical: size.XXL }}
            addCustomItem
            multiple
            closeOnBackPressed
            mode='BADGE'
            listMode='MODAL'
            scrollViewProps={{
                nestedScrollEnabled: true,
            }}
            zIndex={zIndex}
            listItemContainerStyle={styles.listItemContainer}
            containerStyle={styles.dropdown}
            selectedItemLabelStyle={styles.selectedItemLabel}
            selectedItemContainerStyle={styles.selectedItemContainer}
            theme={theme === 'dark' ? 'DARK' : 'LIGHT'}
            placeholder={placeholder}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            dropDownDirection='BOTTOM'
            bottomOffset={500}
            setItems={setItems}
            dropDownContainerStyle={styles.dropDownContainer}
        />
    );
};

export default DropdownMultiple;

const styles = StyleSheet.create({
    dropdown: {
        marginHorizontal: size.XXL,
        marginBottom: size.XXL,
        width: '92%',
        alignSelf: 'center',
    },
    dropDownContainer: {
        position: 'relative',
        top: 0,
        bottom: 300,
    },
    selectedItemContainer: {
        backgroundColor: colors.light.primary,
    },
    selectedItemLabel: {
        fontWeight: 'bold',
    },
    listItemContainer: {
        height: 40,
    },
});
