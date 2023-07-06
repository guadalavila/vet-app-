import React from 'react';
import { Button, Keyboard, StyleSheet, TextInput, View } from 'react-native';
import { colors } from '../utils/colors';
import { size } from '../utils/size';
import Icon from 'react-native-vector-icons/Ionicons';
import { typography } from '../utils/typography';

interface ISearchBarProps {
    value: string;
    onChangeValue: (text: string) => void;
    clicked: boolean;
    setCLicked: (value: boolean) => void;
    placeholder?: string;
}
const SearchBar = ({ value, onChangeValue, setCLicked, clicked, placeholder = 'Buscar...' }: ISearchBarProps) => {
    const cancelSearch = () => {
        Keyboard.dismiss();
        setCLicked(false);
    };
    return (
        <View style={styles.container}>
            <View style={clicked ? styles.searchBar__clicked : styles.searchBar__unclicked}>
                <Icon name='search' size={20} color={colors.light.greyDark} />
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeValue}
                    onFocus={() => setCLicked(true)}
                />
                {clicked && (
                    <Icon name='close' size={20} color={colors.light.greyDark} onPress={() => onChangeValue('')} />
                )}
            </View>
            {clicked && <Button title='Cancelar' onPress={cancelSearch} />}
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
        flexDirection: 'row',
        width: '95%',
        backgroundColor: colors.light.grey,
        borderRadius: 15,
        alignItems: 'center',
    },
    searchBar__clicked: {
        padding: size.L,
        flexDirection: 'row',
        width: '80%',
        backgroundColor: colors.light.grey,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    input: {
        fontSize: typography.size.S,
        marginLeft: size.XXL,
        width: '90%',
    },
});
