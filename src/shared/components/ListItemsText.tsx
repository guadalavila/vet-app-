import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { size } from '~shared/utils/size';
import { colors } from '~shared/utils/colors';
import CustomText from './CustomText';
import { ItemList } from '~models/ItemList';
import Icon from './Icon';
import { ThemeContext } from '~contexts/ThemeContext';

interface IListItemsTextProps {
    placeholder: string;
    items: ItemList[];
    item: ItemList;
    setItem: (item: ItemList) => void;
}

const ListItemsText = ({ placeholder, items, item, setItem }: IListItemsTextProps) => {
    const { themeApp } = useContext(ThemeContext);

    return (
        <View>
            <CustomText style={styles.label}>{placeholder}</CustomText>
            <View style={styles.container}>
                {items.map((item_, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.7}
                        onPress={() => setItem(item_)}
                        style={[
                            styles.containerColor,
                            { backgroundColor: item.label === item_.label ? colors.light.primary : 'transparent' },
                        ]}>
                        <CustomText
                            style={[
                                styles.itemText,
                                { color: item.label === item_.label ? 'white' : themeApp.colors.text },
                            ]}>
                            {item_.label}
                            {item_.icon && (
                                <Icon
                                    name={item_.icon.name}
                                    type={item_.icon.type}
                                    color={item.label === item_.label ? colors.light.card : colors.light.primary}
                                    size={20}
                                />
                            )}
                        </CustomText>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default ListItemsText;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: size.XXL,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: size.XXL,
    },
    containerColor: {
        borderRadius: 4,
        marginHorizontal: size.L,
        marginBottom: size.XXL,
        borderWidth: 1,
        borderColor: colors.light.primary,
        padding: size.M,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: size.L,
        marginHorizontal: size.XXL,
    },
    itemText: {
        fontWeight: 'bold',
        color: colors.light.primary,
        textAlign: 'center',
    },
});
