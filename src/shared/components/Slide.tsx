import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import CustomText from './CustomText';
import Button from './Button';
import { typography } from '../utils/typography';
import { size } from '../utils/size';
import { Slider } from '../../mock/onBoarding';

interface ISlideProps {
    item: Slider;
    index: number;
    totalSlider: number;
    onHandleDismiss: () => void;
    textButton: string;
}

const Slide = ({ item, index, totalSlider, onHandleDismiss, textButton }: ISlideProps) => {
    return (
        <View testID='slide'>
            <Image testID='slide-image' resizeMode='contain' style={styles.image} source={item.image} />
            <CustomText style={styles.title}>{item.title}</CustomText>
            <CustomText style={styles.subtitle}>{item.subtitle}</CustomText>
            {index === totalSlider && (
                <View style={styles.containerButton}>
                    <Button title={textButton} onPress={onHandleDismiss} />
                </View>
            )}
        </View>
    );
};

export default Slide;

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: typography.size.L,
        fontWeight: 'bold',
    },
    subtitle: {
        textAlign: 'center',
        fontSize: typography.size.S,
        marginTop: 40,
        marginHorizontal: size.XXXL,
    },
    image: {
        width: 310,
        height: 310,
        alignSelf: 'center',
    },
    containerButton: {
        position: 'relative',
        top: 50,
    },
});
