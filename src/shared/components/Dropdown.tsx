import React, { Dispatch, useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ItemType } from 'react-native-dropdown-picker';
import { ThemeContext } from '~contexts/ThemeContext';
import { size } from '~shared/utils/size';
import { colors } from '~shared/utils/colors';

type SetStateCallback<S> = (prevState: S) => S;

interface IDropdownProps {
    placeholder: string;
    items: ItemType<any>[];
    setItems: Dispatch<SetStateCallback<any[]>>;
    onSelectItem: (value: any) => void;
    required?: boolean;
    zIndex?: number;
    width?: string;
    isOpen?: boolean;
    initValue?: string;
}

const Dropdown = ({
    placeholder,
    items,
    setItems,
    onSelectItem,
    required,
    zIndex,
    width = '92%',
    isOpen = false,
    initValue,
}: IDropdownProps) => {
    const [open, setOpen] = useState(isOpen);
    const [value, setValue] = useState(initValue);
    const { theme, themeApp } = useContext(ThemeContext);
    return (
        <DropDownPicker
            onSelectItem={(item) => onSelectItem(item)}
            listMode='SCROLLVIEW'
            zIndex={zIndex}
            listItemContainerStyle={[styles.listItemContainer, { backgroundColor: themeApp.colors.input }]}
            containerStyle={[styles.dropdown, { width: width }]}
            selectedItemLabelStyle={[styles.selectedItemLabel, { color: themeApp.colors.white }]}
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
            textStyle={{ color: themeApp.colors.textInput }}
            modalTitle={placeholder}
        />
    );
};

export default Dropdown;

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
