import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomText from './CustomText';
import { colors } from '../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { size } from '../utils/size';
import { GlobalStyles } from '../utils/styles';
import { typography } from '../utils/typography';

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
                <View
                    style={[
                        styles.container,
                        GlobalStyles.row,
                        customStyles,
                        position === 'top' ? styles.top : styles.bottom,
                    ]}>
                    <View>
                        <View style={[styles.containerIcon, customIcon]}>
                            <Icon name='alert-outline' size={22} />
                        </View>
                    </View>
                    <View style={styles.containerText}>
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
        borderRadius: 10,
        justifyContent: 'space-between',
        paddingVertical: size.L,
    },
    top: {
        top: 50,
    },
    bottom: {
        bottom: 30,
    },
    text: {
        fontWeight: '500',
        textAlign: 'center',
        color: 'black',
        fontSize: typography.size.S,
        marginRight: 20,
    },
    containerIcon: {
        width: 30,
        height: 30,
        borderRadius: 30,
        padding: size.S,
        marginHorizontal: size.XL,
    },
    containerText: {
        width: '85%',
    },
});
