import React, { useContext } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { size } from '../utils/size';
import { GlobalStyles } from '../utils/styles';
import { ThemeContext } from '../../contexts/ThemeContext';

const Skeleton = () => {
    const { width } = useWindowDimensions();
    const { themeApp } = useContext(ThemeContext);

    return (
        <View style={[GlobalStyles.flex1, { backgroundColor: themeApp.colors.background, marginTop: size.XL }]}>
            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item
                    marginTop={size.L}
                    width={width - 20}
                    height={60}
                    borderRadius={6}
                    alignSelf='center'
                />
                <SkeletonPlaceholder.Item
                    marginTop={size.L}
                    width={width - 20}
                    height={60}
                    borderRadius={6}
                    alignSelf='center'
                />
                <SkeletonPlaceholder.Item
                    marginTop={size.L}
                    width={width - 20}
                    height={60}
                    borderRadius={6}
                    alignSelf='center'
                />
                <SkeletonPlaceholder.Item
                    marginTop={size.L}
                    width={width - 20}
                    height={60}
                    borderRadius={6}
                    alignSelf='center'
                />
                <SkeletonPlaceholder.Item
                    marginTop={size.L}
                    width={width - 20}
                    height={60}
                    borderRadius={6}
                    alignSelf='center'
                />
                <SkeletonPlaceholder.Item
                    marginTop={size.L}
                    width={width - 20}
                    height={60}
                    borderRadius={6}
                    alignSelf='center'
                />
                <SkeletonPlaceholder.Item
                    marginTop={size.L}
                    width={width - 20}
                    height={60}
                    borderRadius={6}
                    alignSelf='center'
                />
                <SkeletonPlaceholder.Item
                    marginTop={size.L}
                    width={width - 20}
                    height={60}
                    borderRadius={6}
                    alignSelf='center'
                />
                <SkeletonPlaceholder.Item
                    marginTop={size.L}
                    width={width - 20}
                    height={60}
                    borderRadius={6}
                    alignSelf='center'
                />
                <SkeletonPlaceholder.Item
                    marginTop={size.L}
                    width={width - 20}
                    height={60}
                    borderRadius={6}
                    alignSelf='center'
                />
                <SkeletonPlaceholder.Item
                    marginTop={size.L}
                    width={width - 20}
                    height={60}
                    borderRadius={6}
                    alignSelf='center'
                />
                <SkeletonPlaceholder.Item
                    marginTop={size.L}
                    width={width - 20}
                    height={60}
                    borderRadius={6}
                    alignSelf='center'
                />
            </SkeletonPlaceholder>
        </View>
    );
};

export default Skeleton;

const styles = StyleSheet.create({});
