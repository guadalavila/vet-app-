import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Overlay from './Overlay';
import CustomText from './CustomText';
import { colors } from '../utils/colors';
import { size } from '../utils/size';
import { typography } from '../utils/typography';
import { ThemeContext } from '../../contexts/ThemeContext';

interface IModalCustomProps {
    title: string;
    visible: boolean;
    confirmButton: string;
    onConfirmPressed: any;
    message?: string;
    cancelButton?: string;
    onCancelPressed?: any;
}

const ModalCustom = ({
    title,
    visible,
    confirmButton,
    onConfirmPressed,
    cancelButton,
    onCancelPressed,
    message,
}: IModalCustomProps) => {
    const { themeApp } = useContext(ThemeContext);
    return (
        <Overlay
            isVisible={visible}
            backdropStyle={styles.backdrop}
            overlayStyle={[styles.overlay, { backgroundColor: themeApp.colors.backgroundInput }]}>
            <View>
                <View style={styles.containerInfo}>
                    <CustomText style={styles.title}>{title}</CustomText>
                    {message && <CustomText style={styles.message}>{message}</CustomText>}
                </View>
                <View style={styles.containerButtons}>
                    <TouchableOpacity onPress={onConfirmPressed} activeOpacity={0.7} style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <CustomText style={[styles.textButtonPrimary]}>{confirmButton}</CustomText>
                        </View>
                    </TouchableOpacity>
                    {cancelButton ? (
                        <TouchableOpacity onPress={onCancelPressed} activeOpacity={0.7} style={styles.buttonContainer}>
                            <View style={styles.buttonOutline}>
                                <CustomText style={[styles.textButtonSecondary]}>{cancelButton}</CustomText>
                            </View>
                        </TouchableOpacity>
                    ) : null}
                </View>
            </View>
        </Overlay>
    );
};

export default ModalCustom;

const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'rgba(42, 42, 60, 0.45)',
    },
    overlay: {
        top: '40%',
        position: 'absolute',
        borderRadius: 5,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,
        elevation: 13,
    },
    containerInfo: {
        marginTop: size.L,
        alignItems: 'center',
    },
    title: {
        paddingVertical: size.L,
        fontSize: typography.size.M,
    },
    message: {
        fontSize: typography.size.M,
        paddingBottom: size.L,
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: size.XXL,
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
    buttonOutline: {
        borderColor: colors.light.primary,
        paddingVertical: size.XXL,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: 'center',
    },
    textButtonPrimary: {
        fontSize: typography.size.S,
        color: colors.light.white,
    },
    textButtonSecondary: {
        fontSize: typography.size.S,
        color: colors.light.greyDark,
    },
});
