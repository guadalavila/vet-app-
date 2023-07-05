import React, { Dispatch, useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ItemType } from 'react-native-dropdown-picker';
import { ThemeContext } from '../../contexts/ThemeContext';
import { size } from '../utils/size';
import { colors } from '../utils/colors';

type SetStateCallback<S> = (prevState: S) => S;

interface IDropdownProps {
    placeholder: string;
    items: ItemType<any>[];
    setItems: Dispatch<SetStateCallback<any[]>>;
    onSelectItems: (values: any[]) => void;

    required?: boolean;
    zIndex?: number;
}

const DropdownMultiple = ({ placeholder, items, setItems, onSelectItems, required, zIndex }: IDropdownProps) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const { theme } = useContext(ThemeContext);
    return (
        <DropDownPicker
            multiple
            mode='BADGE'
            listMode='MODAL'
            onSelectItem={(items_) => onSelectItems(items_)}
            // showBadgeDot
            // badgeDotColors={['red', 'blue', 'orange']}
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
