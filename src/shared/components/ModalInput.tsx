import { StyleSheet, TouchableOpacity, View, TextInput, ActivityIndicator } from 'react-native';
import React, { useContext, useState } from 'react';
import Overlay from './Overlay';
import CustomText from './CustomText';
import { colors } from '~shared/utils/colors';
import { ThemeContext } from '~contexts/ThemeContext';
import { size } from '~shared/utils/size';
import { typography } from '~shared/utils/typography';

interface ModalInputProps {
    title: string;
    confirmButton: string;
    visible: boolean;
    onConfirmPressed: (newValue: string) => void;
    loading: boolean;
    cancelButton?: string;
    onCancelPressed?: () => void;
}

const ModalInput = ({
    title,
    cancelButton,
    confirmButton,
    onConfirmPressed,
    onCancelPressed,
    loading,
    visible,
}: ModalInputProps) => {
    const { themeApp, theme } = useContext(ThemeContext);
    const [name, setName] = useState('');
    return (
        <>
            {visible && (
                <Overlay
                    isVisible
                    backdropStyle={styles.backdrop}
                    overlayStyle={[styles.overlay, { backgroundColor: themeApp.colors.backgroundInput }]}>
                    <View>
                        <View style={styles.containerInfo}>
                            <CustomText style={styles.title}>{title}</CustomText>
                            <TextInput
                                placeholder={'Ingresá..'}
                                numberOfLines={1}
                                placeholderTextColor={themeApp.colors.textInput}
                                style={[
                                    styles.input,
                                    {
                                        borderColor: themeApp.colors.backgroundInput,
                                        color: themeApp.colors.textInput,
                                        backgroundColor: themeApp.colors.input,
                                    },
                                ]}
                                value={name}
                                onChangeText={(text) => setName(text)}
                            />
                        </View>
                        <View style={styles.containerButtons}>
                            <TouchableOpacity
                                disabled={name.replace(/\s/g, '').length < 1}
                                onPress={() => {
                                    onConfirmPressed(name);
                                    setName('');
                                }}
                                activeOpacity={0.7}
                                style={styles.buttonContainer}>
                                <View style={styles.button}>
                                    {loading ? (
                                        <ActivityIndicator size={'small'} color={'white'} />
                                    ) : (
                                        <CustomText style={[styles.textButtonPrimary]}>{confirmButton}</CustomText>
                                    )}
                                </View>
                            </TouchableOpacity>
                            {cancelButton ? (
                                <TouchableOpacity
                                    onPress={() => {
                                        setName('');
                                        onCancelPressed && onCancelPressed();
                                    }}
                                    activeOpacity={0.7}
                                    style={styles.buttonContainer}>
                                    <View style={styles.buttonOutline}>
                                        <CustomText
                                            style={[styles.textButtonSecondary, { color: colors.light.primary }]}>
                                            {cancelButton}
                                        </CustomText>
                                    </View>
                                </TouchableOpacity>
                            ) : null}
                        </View>
                    </View>
                </Overlay>
            )}
        </>
    );
};

export default ModalInput;

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(42, 42, 60, 0.45)',
    },
    overlay: {
        top: '30%',
        position: 'absolute',
        borderRadius: 5,
        width: '94%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,
        elevation: 13,
        backgroundColor: 'white',
    },
    containerInfo: {
        paddingHorizontal: size.L,
        marginTop: size.XL,
    },
    title: {
        paddingBottom: size.XXL,
        fontSize: typography.size.M,
        fontWeight: '600',
        alignSelf: 'center',
    },
    buttonContainer: {
        width: '40%',
    },
    button: {
        backgroundColor: colors.light.primary,
        paddingVertical: size.XXL,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: size.L,
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        marginTop: size.L,
        paddingHorizontal: size.XL,
        paddingVertical: size.XXL,
        marginVertical: size.XL,
    },
    buttonOutline: {
        borderColor: colors.light.primary,
        paddingVertical: size.XXL,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
    },
    textButtonSecondary: {
        fontSize: typography.size.S,
        color: colors.light.greyDark,
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: size.XXL,
    },
    textButtonPrimary: {
        fontSize: typography.size.S,
        color: colors.light.white,
    },
});
