import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../utils/colors';
import { size } from '../utils/size';
import { typography } from '../utils/typography';
import CustomText from './CustomText';

interface IItemVisitProps {}

const ItemVisit = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <View>
            <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={() => setIsOpen(!isOpen)}>
                <CustomText style={styles.date}>12-04-23</CustomText>
                <Icon
                    name={!isOpen ? 'chevron-down-outline' : 'chevron-up-outline'}
                    size={24}
                    color={colors.light.white}
                />
            </TouchableOpacity>
            {isOpen && (
                <View style={styles.detailVisit}>
                    <CustomText>Peso</CustomText>
                    <CustomText>Temperatura</CustomText>
                </View>
            )}
        </View>
    );
};

export default ItemVisit;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light.grey,
        padding: size.XL,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailVisit: {
        backgroundColor: colors.light.primary,
    },
    date: {
        fontSize: typography.size.M,
        fontWeight: 'bold',
    },
});
