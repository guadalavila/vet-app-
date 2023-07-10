import React from 'react';
import { View, StyleSheet, Platform, TouchableWithoutFeedback, Modal } from 'react-native';
import PropTypes from 'prop-types';

interface OverlayProps {
    children: React.ReactNode;
    backdropStyle: any;
    overlayStyle: any;
    onBackdropPress: () => void;
    fullScreen: boolean;
    ModalComponent: any;
    isVisible: boolean;
}

const Overlay = ({
    children,
    backdropStyle,
    overlayStyle,
    onBackdropPress,
    fullScreen,
    ModalComponent,
    isVisible,
    ...rest
}: OverlayProps) => (
    <ModalComponent visible={isVisible} onRequestClose={onBackdropPress} transparent {...rest}>
        <TouchableWithoutFeedback onPress={onBackdropPress}>
            <View style={StyleSheet.flatten([styles.backdrop, backdropStyle])} />
        </TouchableWithoutFeedback>

        <View style={styles.container} pointerEvents='box-none'>
            <View style={StyleSheet.flatten([styles.overlay, fullScreen && styles.fullscreen, overlayStyle])}>
                {children}
            </View>
        </View>
    </ModalComponent>
);

export default Overlay;

const styles = StyleSheet.create({
    backdrop: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, .4)',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    fullscreen: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        backgroundColor: 'white',
        borderRadius: 3,
        padding: 10,
        ...Platform.select({
            android: {
                elevation: 2,
            },
            default: {
                shadowColor: 'rgba(0, 0, 0, .3)',
                shadowOffset: { width: 0, height: 1 },
                shadowRadius: 4,
            },
        }),
    },
});

Overlay.propTypes = {
    children: PropTypes.element.isRequired,
    isVisible: PropTypes.bool.isRequired,
    backdropStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    overlayStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onBackdropPress: PropTypes.func,
    fullScreen: PropTypes.bool,
    ModalComponent: PropTypes.elementType,
};

Overlay.defaultProps = {
    fullScreen: false,
    onBackdropPress: () => null,
    ModalComponent: Modal,
};
