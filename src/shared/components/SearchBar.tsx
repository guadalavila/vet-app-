import React, { useContext } from 'react';
import { Button, Keyboard, KeyboardType, StyleSheet, TextInput, View } from 'react-native';
import { colors } from '../utils/colors';
import { size } from '../utils/size';
import Icon from 'react-native-vector-icons/Ionicons';
import { typography } from '../utils/typography';
import { ThemeContext } from '../../contexts/ThemeContext';

interface ISearchBarProps {
    value: string;
    onChangeValue: (text: string) => void;
    clicked: boolean;
    setCLicked: (value: boolean) => void;
    placeholder?: string;
    onCancelSearch?: () => void;
    fullWidth?: boolean;
    editable?: boolean;
    keyboardType?: KeyboardType;
}
const SearchBar = ({
    value,
    onChangeValue,
    setCLicked,
    clicked,
    placeholder = 'Buscar...',
    onCancelSearch,
    fullWidth = false,
    editable = true,
    keyboardType,
}: ISearchBarProps) => {
    const cancelSearch = () => {
        Keyboard.dismiss();
        setCLicked(false);
        onChangeValue('');
        onCancelSearch && onCancelSearch();
    };
    const { themeApp } = useContext(ThemeContext);
    return (
        <View style={styles.container}>
            <View
                style={[
                    fullWidth ? styles.fullWidth : styles.width,
                    clicked ? styles.searchBar__clicked : styles.searchBar__unclicked,
                    { backgroundColor: themeApp.colors.backgroundInput },
                ]}>
                <Icon name='search' size={20} color={colors.light.greyDark} />
                <TextInput
                    editable={editable}
                    placeholderTextColor={themeApp.colors.textInput}
                    style={[styles.input, { color: themeApp.colors.textInput }]}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeValue}
                    keyboardType={keyboardType}
                    onFocus={() => setCLicked(true)}
                />
                {editable && clicked && (
                    <Icon name='close' size={20} color={colors.light.greyDark} onPress={() => onChangeValue('')} />
                )}
            </View>
            {editable && clicked && !fullWidth && <Button title='Cancelar' onPress={cancelSearch} />}
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: size.XXL,
        marginBottom: size.XXL,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        width: '90%',
    },
    searchBar__unclicked: {
        padding: size.L,
        paddingVertical: size.XL,
        flexDirection: 'row',
        width: '100%',
        borderRadius: 15,
        alignItems: 'center',
    },
    searchBar__clicked: {
        padding: size.L,
        paddingVertical: size.XL,
        flexDirection: 'row',
        // width: '80%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    input: {
        fontSize: typography.size.S,
        marginLeft: size.XXL,
        width: '90%',
        color: 'red',
    },
    fullWidth: {
        width: '103%',
    },
    width: {
        width: '80%',
    },
});
