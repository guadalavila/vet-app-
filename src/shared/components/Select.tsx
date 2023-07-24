import React from 'react';
import { StyleSheet, Switch, View } from 'react-native';
import { typography } from '../utils/typography';
import CustomText from './CustomText';
import { colors } from '../utils/colors';

interface ISelectProps {
    title: string;
    selected: boolean;
    onChangeSelect: () => void;
}

const Select = ({ title, selected, onChangeSelect }: ISelectProps) => {
    return (
        <View style={styles.container}>
            <CustomText style={[styles.title]}>{title}</CustomText>
            <Switch
                style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                trackColor={{ false: '#767577', true: colors.light.success }}
                thumbColor={true ? colors.light.white : colors.light.grey}
                ios_backgroundColor={colors.light.grey}
                onValueChange={onChangeSelect}
                value={selected}
            />
        </View>
    );
};

export default Select;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: typography.size.S,
    },
    title: {
        fontSize: typography.size.S,
        fontWeight: '600',
    },
});
