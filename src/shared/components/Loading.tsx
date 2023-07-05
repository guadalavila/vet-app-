import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../utils/colors';
import { GlobalStyles } from '../utils/styles';

interface ILoadingProps {
    message?: string;
}

const Loading = ({ message = 'Cargando...' }: ILoadingProps) => {
    return (
        <View style={GlobalStyles.flexCenter}>
            <ActivityIndicator size={'large'} color={colors.light.primary} />
        </View>
    );
};

export default Loading;
