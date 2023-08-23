import React from 'react';
import { StyleSheet, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '~shared/utils/colors';

interface IIconProps {
    name: string;
    type?: 'Ionicons' | 'MaterialCommunityIcons';
    color?: string;
    size?: number;
}

const Icon = ({ name, type = 'Ionicons', color = colors.light.primary, size = 22 }: IIconProps) => {
    return (
        <View>
            {type === 'Ionicons' ? (
                <Ionicons name={name} size={size} color={color} />
            ) : (
                <MaterialCommunity name={name} size={size} color={color} />
            )}
        </View>
    );
};

export default Icon;

const styles = StyleSheet.create({});
