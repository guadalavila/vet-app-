import React, { useContext } from 'react';
import { KeyboardAvoidingView, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '~contexts/ThemeContext';
import { GlobalStyles } from '~shared/utils/styles';

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
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                    <View style={GlobalStyles.flex1}>{children}</View>
                </KeyboardAvoidingView>
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
