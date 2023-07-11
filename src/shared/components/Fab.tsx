import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';

interface IFabProps {
    onPress: () => void;
    icon?: string;
}

const Fab = ({ onPress, icon = 'add' }: IFabProps) => {
    return (
        <TouchableOpacity style={styles.fab} activeOpacity={0.7} onPress={onPress}>
            <Icon style={styles.icon} name={icon} color={colors.light.grey} size={40} />
        </TouchableOpacity>
    );
};

export default Fab;

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        right: 10,
        bottom: 100,
        height: 60,
        width: 60,
        borderRadius: 60,
        backgroundColor: colors.light.primary,
        justifyContent: 'center',
    },
    icon: {
        alignSelf: 'center',
    },
});
