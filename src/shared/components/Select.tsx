import React from 'react';
import { StyleSheet, Switch, View } from 'react-native';
import { typography } from '~shared/utils/typography';
import CustomText from './CustomText';
import { colors } from '~shared/utils/colors';
import { size } from '~shared/utils/size';

interface ISelectProps {
    title: string;
    selected: boolean;
    onChangeSelect: () => void;
}

const Select = ({ title, selected, onChangeSelect }: ISelectProps) => {
    return (
        <View style={styles.container} testID='select'>
            <CustomText style={[styles.title]}>{title}</CustomText>
            <Switch
                testID='switch'
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
        marginHorizontal: size.XXL,
        marginVertical: size.XL,
        paddingBottom: size.M,
        paddingTop: size.S,
        borderBottomColor: colors.light.primary,
        borderBottomWidth: 1,
        borderRadius: 2,
    },
    title: {
        fontSize: typography.size.S,
        fontWeight: '600',
    },
});
