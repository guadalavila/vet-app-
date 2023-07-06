import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
//@ts-ignore
import BottomSheetApp from 'react-native-gesture-bottom-sheet';
import { ThemeContext } from '../../contexts/ThemeContext';

interface IBottomSheetProps {
    refBottomSheet: React.MutableRefObject<undefined>;
    children: React.ReactNode;
    height: number;
}

const BottomSheet = ({ refBottomSheet, children, height }: IBottomSheetProps) => {
    const { themeApp } = useContext(ThemeContext);
    return (
        <View>
            <BottomSheetApp
                sheetBackgroundColor={themeApp.colors.bottomSheet}
                hasDraggableIcon
                ref={refBottomSheet}
                height={height}>
                <View>{children}</View>
            </BottomSheetApp>
        </View>
    );
};

export default BottomSheet;

const styles = StyleSheet.create({});
