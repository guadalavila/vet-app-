import React, { useContext } from 'react';
import { View, TouchableOpacity, Dimensions, StyleSheet, SafeAreaView, Platform } from 'react-native';
import CustomText from './CustomText';
import { colors } from '../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { getIconByRoute } from '../utils/routes';
import { size } from '../utils/size';
import { typography } from '../utils/typography';
import { ThemeContext } from '../../contexts/ThemeContext';

const windowHeight = Dimensions.get('window').height;

const CustomTabBar = ({ state, navigation, descriptors }: any) => {
    const { themeApp } = useContext(ThemeContext);
    return (
        <SafeAreaView style={[styles.container, { backgroundColor: themeApp.colors.backgroundInput }]}>
            {state.routes.map((route: any, index: number) => {
                const isFocused = state.index === index;
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: String(route.key),
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };
                return (
                    <View key={index} style={styles.containerItem}>
                        <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.icon}>
                            <Icon
                                name={getIconByRoute(route.name)}
                                size={24}
                                color={isFocused ? colors.light.primary : colors.light.greyDark}
                            />
                            <CustomText
                                style={[
                                    styles.textIcon,
                                    { color: themeApp.colors.textInput },
                                    isFocused && styles.textSelected,
                                ]}
                                props={{ numberOfLines: 1 }}>
                                {label}
                            </CustomText>
                        </TouchableOpacity>
                    </View>
                );
            })}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        height: Platform.OS === 'android' ? windowHeight * 0.1 : windowHeight * 0.11,
        width: '100%',
        backgroundColor: colors.light.grey,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    containerItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: size.XXL,
    },
    icon: {
        paddingVertical: size.XL,
        alignItems: 'center',
    },
    textIcon: {
        marginTop: size.L,
        color: 'black',
        fontSize: typography.size.XS,
    },
    textSelected: {
        color: colors.light.primary,
        fontWeight: '600',
        fontSize: typography.size.XS,
    },
});

export default CustomTabBar;
