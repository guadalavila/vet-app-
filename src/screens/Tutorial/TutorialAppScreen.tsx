import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackLogoutParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<RootStackLogoutParamList, 'TutorialAppScreen'> {}

const TutorialAppScreen = ({}: Props) => {
    return (
        <View>
            <Text>TutorialAppScreen</Text>
        </View>
    );
};

export default TutorialAppScreen;

const styles = StyleSheet.create({});
