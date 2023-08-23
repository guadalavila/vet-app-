import React, { useContext } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '~contexts/ThemeContext';

interface IContainerProps {
    children: React.ReactNode;
}

const Container = ({ children }: IContainerProps) => {
    const {
        themeApp: { colors },
        theme,
    } = useContext(ThemeContext);
    const { top, bottom } = useSafeAreaInsets();
    return (
        <>
            <StatusBar translucent barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} />
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
