import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeContext } from '~contexts/ThemeContext';
import { size } from '~shared/utils/size';
import { GlobalStyles } from '~shared/utils/styles';

interface ICardProps {
    children: React.ReactNode;
    testID?: string | undefined;
}

const Card = ({ children, testID }: ICardProps) => {
    const { themeApp } = useContext(ThemeContext);

    return (
        <View
            testID={testID}
            style={[styles.card, GlobalStyles.shadowCard, { backgroundColor: themeApp.colors.container }]}>
            {children}
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        marginHorizontal: size.XXL,
        borderRadius: 16,
        paddingVertical: size.XL,
        paddingHorizontal: size.L,
    },
});
