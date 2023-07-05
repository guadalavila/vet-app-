import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'AddClientScreen'> {}

const AddClientScreen = ({}: Props) => {
    return (
        <View>
            <Text>AddClientScreen</Text>
        </View>
    );
};

export default AddClientScreen;

const styles = StyleSheet.create({});
