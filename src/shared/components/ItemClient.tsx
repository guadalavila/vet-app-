import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './CustomText';
import { Client } from '~models/Client';
import { colors } from '~shared/utils/colors';
import { size } from '~shared/utils/size';
import { ThemeContext } from '~contexts/ThemeContext';

interface IItemClientProps {
    client: Client;
    onPress: () => void;
}

const ItemClient = ({ client, onPress }: IItemClientProps) => {
    const { themeApp } = useContext(ThemeContext);
    return (
        <TouchableOpacity
            testID='ItemClient'
            activeOpacity={0.7}
            style={[styles.container, { backgroundColor: themeApp.colors.backgroundInput }]}
            onPress={onPress}>
            <CustomText style={styles.text} testID='nameAndLastName'>
                {client.name} {client.lastName}
            </CustomText>
        </TouchableOpacity>
    );
};

export default ItemClient;

const styles = StyleSheet.create({
    container: {
        paddingVertical: size.XL,
        paddingHorizontal: size.XL,
        borderBottomColor: colors.light.primary,
        borderBottomWidth: 1,
    },
    text: {
        fontWeight: 'bold',
    },
});
