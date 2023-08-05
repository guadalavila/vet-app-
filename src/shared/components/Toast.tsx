import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomText from './CustomText';
import { colors } from '../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { size } from '../utils/size';
import { GlobalStyles } from '../utils/styles';

interface IToastProps {
    type: 'success' | 'warning' | 'error' | 'default';
    text: string;
    position?: 'bottom' | 'top';
    callback?: () => void;
    timeOut?: number;
}

const Toast = ({ type, text, position = 'top', callback, timeOut = 3500 }: IToastProps) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            callback && callback();
        }, timeOut);
        return () => clearTimeout(timer);
    }, []);

    let customStyles = {
        backgroundColor: colors.light.toastDefaultLight,
    };
    let customIcon = {};
    if (type === 'error') {
        customStyles = {
            backgroundColor: colors.light.toastErrorLight,
        };
        customIcon = {
            backgroundColor: colors.light.toastError,
        };
    } else if (type === 'success') {
        customStyles = {
            backgroundColor: colors.light.toastSuccessLight,
        };
        customIcon = {
            backgroundColor: colors.light.toastSuccess,
        };
    } else if (type === 'warning') {
        customStyles = {
            backgroundColor: colors.light.toastWarningLight,
        };
        customIcon = {
            backgroundColor: colors.light.toastWarning,
        };
    }

    return (
        <>
            {isVisible && (
                <View style={[styles.container, customStyles, position === 'top' ? styles.top : styles.bottom]}>
                    <View style={GlobalStyles.row}>
                        <View style={[styles.containerIcon, customIcon]}>
                            <Icon name='alert-outline' size={30} />
                        </View>
                        <CustomText style={styles.text}>{text}</CustomText>
                    </View>
                </View>
            )}
        </>
    );
};

export default Toast;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 10,
        left: 10,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'red',
        justifyContent: 'center',
    },
    top: {
        top: 50,
    },
    bottom: {
        bottom: 30,
    },
    text: {
        fontWeight: '600',
        textAlign: 'center',
        color: 'black',
        alignSelf: 'center',
    },
    containerIcon: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: 'red',
        padding: size.S,
        marginHorizontal: size.XXL,
    },
});
