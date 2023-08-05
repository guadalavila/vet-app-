import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackLogoutParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import CustomText from '../../shared/components/CustomText';
import { size } from '../../shared/utils/size';
import { typography } from '../../shared/utils/typography';
import { colors } from '../../shared/utils/colors';

interface Props extends NativeStackScreenProps<RootStackLogoutParamList, 'OnBoardingScreen'> {}

const OnBoardingScreen = ({ navigation }: Props) => {
    const skipTutorial = () => {};
    return (
        <Container>
            <TouchableOpacity style={styles.containerButtonSkip} activeOpacity={0.7} onPress={skipTutorial}>
                <CustomText style={styles.textSkip}>Saltar</CustomText>
            </TouchableOpacity>
            <Text>TutorialAppScreen</Text>
        </Container>
    );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
    containerButtonSkip: {
        alignSelf: 'flex-end',
    },
    textSkip: {
        fontSize: typography.size.M,
        color: '#007cad',
    },
});
