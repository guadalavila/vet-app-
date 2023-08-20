import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import useAuth from '../../shared/hooks/useAuth';
import { colors } from '../../shared/utils/colors';
import { size } from '../../shared/utils/size';
import { typography } from '../../shared/utils/typography';
import CustomText from '../../shared/components/CustomText';
import Separator from '../../shared/components/Separator';
import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalStyles } from '../../shared/utils/styles';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'ProfileScreen'> {}

const ProfileScreen = ({}: Props) => {
    const { user } = useAuth();
    const [showDetailVet, setShowDetailVet] = useState(true);

    const getCodeName = () => {
        if (user) {
            return user.name.charAt(0).concat(user.lastName.charAt(0)).toUpperCase();
        } else {
            return '';
        }
    };

    return (
        <Container>
            <Header buttonBack title='Perfil' />
            <View style={styles.containerAvatar}>
                <Text style={styles.textAvatar}>{getCodeName()}</Text>
            </View>
            <View style={styles.info}>
                <CustomText style={styles.title}>Email</CustomText>
                <CustomText style={styles.margin}>{user?.email}</CustomText>
                <Separator />
            </View>
            <View style={styles.info}>
                <CustomText style={styles.title}>Rol</CustomText>
                <CustomText style={styles.margin}>{user?.role.toUpperCase()}</CustomText>
                <Separator />
            </View>
            <TouchableOpacity style={styles.info} activeOpacity={0.7} onPress={() => setShowDetailVet(!showDetailVet)}>
                <View style={GlobalStyles.rowBetween}>
                    <CustomText style={styles.title}>Tu veterinaria</CustomText>
                    <Icon name='chevron-forward-outline' color={colors.light.primary} size={22} />
                </View>
            </TouchableOpacity>
            {showDetailVet && (
                <View>
                    {user?.vetId && typeof user?.vetId == 'object' && (
                        <View style={styles.containerUser}>
                            <View style={styles.info}>
                                <CustomText style={styles.title}>Nombre</CustomText>
                                <CustomText style={styles.margin}>{user?.vetId?.name}</CustomText>
                            </View>
                            <Separator />
                            <View style={styles.info}>
                                <CustomText style={styles.title}>Dirección</CustomText>
                                <CustomText style={styles.margin}>
                                    {user?.vetId?.address} , {user?.vetId.city}
                                </CustomText>
                            </View>
                        </View>
                    )}
                </View>
            )}
        </Container>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    containerAvatar: {
        backgroundColor: colors.light.primary,
        borderRadius: 100,
        width: 100,
        height: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: size.L,
    },
    textAvatar: {
        fontSize: typography.size.XXXL,
        color: colors.light.white,
        alignSelf: 'center',
    },
    containerRole: {
        margin: size.XXL,
    },
    containerUser: {
        marginHorizontal: size.XL,
        marginVertical: size.L,
    },
    title: {
        fontWeight: '500',
        fontSize: typography.size.S,
    },
    info: {
        marginHorizontal: size.XL,
        marginVertical: size.L,
    },
    margin: {
        marginVertical: size.XS,
    },
});
