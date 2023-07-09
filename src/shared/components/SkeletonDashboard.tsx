import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SkeletonDashboard = () => {
    const { width } = useWindowDimensions();

    return (
        <SkeletonPlaceholder>
            <SkeletonPlaceholder.Item flexDirection='row' alignItems='center' alignSelf='center'>
                <SkeletonPlaceholder.Item
                    marginRight={6}
                    width={width * 0.45}
                    height={250}
                    marginTop={60}
                    borderRadius={10}
                />
                <SkeletonPlaceholder.Item
                    marginLeft={6}
                    width={width * 0.45}
                    height={250}
                    marginTop={60}
                    borderRadius={10}
                />
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item
                width={width - 20}
                height={200}
                borderRadius={10}
                alignSelf='center'
                marginVertical={10}
            />
            {/* <SkeletonPlaceholder.Item width={width - 20} height={100} borderRadius={20} alignSelf='center' /> */}
        </SkeletonPlaceholder>
    );
};

export default SkeletonDashboard;

const styles = StyleSheet.create({});
