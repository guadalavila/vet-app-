import React from 'react';
import { StyleSheet } from 'react-native';
import { typography } from '../utils/typography';
import { size } from '../utils/size';
import CustomText from './CustomText';

interface ITitleProps {
    text: string;
}

const Title = ({ text }: ITitleProps) => {
    return <CustomText style={[styles.text]}>{text}</CustomText>;
};

export default Title;

const styles = StyleSheet.create({
    text: {
        fontWeight: '600',
        fontSize: typography.size.M,
        marginLeft: size.XXL,
        marginVertical: size.XXL,
    },
});
