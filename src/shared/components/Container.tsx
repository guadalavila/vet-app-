import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../contexts/ThemeContext';

interface IContainerProps {
    children: React.ReactNode;
}

const Container = ({ children }: IContainerProps) => {
    const {
        themeApp: { colors },
    } = useContext(ThemeContext);
    const { top, bottom } = useSafeAreaInsets();
    return (
        <>
            <View
                style={[
                    styles.container,
                    { backgroundColor: colors.background, paddingTop: top, paddingBottom: bottom },
                ]}>
                {children}
            </View>
        </>
    );
};

export default Container;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
