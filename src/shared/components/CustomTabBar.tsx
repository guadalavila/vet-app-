import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet, SafeAreaView, Platform } from 'react-native';
import { colors } from '../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { getIconByRoute } from '../utils/routes';
import { size } from '../utils/size';
import { ThemeContext } from '../../contexts/ThemeContext';

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
        bottom: 16,
        width: '80%',
        alignSelf: 'center',
        borderRadius: 30,
    },
    containerItem: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        width: '80%',
        borderRadius: 30,
        marginTop: Platform.OS === 'ios' ? size.XL : size.XXS,
    },
    icon: {
        paddingVertical: Platform.OS === 'ios' ? size.L : size.XXL,
        alignItems: 'center',
    },
});

export default CustomTabBar;
