import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import { RootStackLogoutParamList } from '../../navigations/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Container from '../../shared/components/Container';
import CustomText from '../../shared/components/CustomText';
import { size } from '../../shared/utils/size';
import { typography } from '../../shared/utils/typography';
import { ThemeContext } from '../../contexts/ThemeContext';
import Carousel from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { SliderOnBoarding } from '../../mock/onBoarding';
import Pagination from '../../shared/components/Pagination';
import Slide from '../../shared/components/Slide';
import { setData } from '../../shared/utils/storage/asyncStorage';
import { STORAGE_KEYS } from '../../shared/utils/storage/keys';
interface Props extends NativeStackScreenProps<RootStackLogoutParamList, 'OnBoardingScreen'> {}

const OnBoardingScreen = ({ navigation }: Props) => {
    const { themeApp } = useContext(ThemeContext);
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    const progressValue = useSharedValue(0);
    const [isStackLogin, setIsStackLogin] = useState(false);

    useEffect(() => {
        if (navigation.getState().routeNames.find((x) => x === 'LoginScreen')) {
            setIsStackLogin(true);
        } else {
            setIsStackLogin(false);
        }
    }, []);

    const dismissTutorial = () => {
        setData(STORAGE_KEYS.INIT_ROUTE, 'LoginScreen');
        isStackLogin ? navigation.replace('LoginScreen') : navigation.goBack();
    };

    return (
        <Container>
            <TouchableOpacity style={styles.containerButtonSkip} activeOpacity={0.7} onPress={dismissTutorial}>
                <CustomText style={[styles.textSkip, { color: themeApp.colors.blue }]}>Saltar</CustomText>
            </TouchableOpacity>
            <View style={styles.containerCarrousel}>
                <Carousel
                    style={styles.carrousel}
                    width={width}
                    height={height * 0.85}
                    autoPlay
                    onProgressChange={(_, absoluteProgress) => {
                        progressValue.value = absoluteProgress;
                    }}
                    data={SliderOnBoarding}
                    scrollAnimationDuration={1400}
                    renderItem={({ item, index }) => (
                        <Slide
                            index={index}
                            item={item}
                            totalSlider={SliderOnBoarding.length - 1}
                            textButton={isStackLogin ? 'Comenzar' : 'Salir'}
                            onHandleDismiss={dismissTutorial}
                        />
                    )}
                />
                {Boolean(progressValue) && (
                    <View style={styles.pagination}>
                        {SliderOnBoarding?.map((_, index) => {
                            return <Pagination animation={progressValue} index={index} key={index} length={10} />;
                        })}
                    </View>
                )}
            </View>
        </Container>
    );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
    containerButtonSkip: {
        alignSelf: 'flex-end',
        marginHorizontal: size.XL,
        marginTop: size.L,
    },
    textSkip: {
        fontSize: typography.size.M,
    },
    pagination: {
        width: '100%',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
    },
    carrousel: {
        marginTop: 50,
    },
    containerCarrousel: {
        flex: 1,
        marginTop: size.XXXL,
    },
});
