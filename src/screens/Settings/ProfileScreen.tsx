import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackLoginParamList } from '../../navigations/types';
import Container from '../../shared/components/Container';
import Header from '../../shared/components/Header';
import useAuth from '../../shared/hooks/useAuth';
import { colors } from '../../shared/utils/colors';
import { size } from '../../shared/utils/size';
import { typography } from '../../shared/utils/typography';
import CustomText from '../../shared/components/CustomText';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'ProfileScreen'> {}

const ProfileScreen = ({}: Props) => {
    const { user } = useAuth();

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
            <View style={styles.containerRole}>
                <CustomText style={styles.title}>{user?.role.toUpperCase()}</CustomText>
            </View>
            <CustomText style={styles.text}>{user?.email}</CustomText>
            {user?.vetId && (
                <View style={styles.containerUser}>
                    <CustomText style={styles.textBold}>{user?.vetId.name}</CustomText>
                    <CustomText style={styles.text}>{user?.vetId.address}</CustomText>
                    <CustomText style={styles.text}>{user?.vetId.city}</CustomText>
                    <CustomText style={styles.text}>{user?.vetId.codePostal}</CustomText>
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
    title: {
        fontSize: typography.size.S,
        textAlign: 'center',
        fontWeight: '600',
    },
    containerUser: {
        marginHorizontal: size.XL,
        marginVertical: size.XXL,
    },
    text: {
        fontSize: typography.size.S,
        textAlign: 'center',
        fontWeight: '600',
        marginVertical: size.S,
    },
    textBold: {
        fontSize: typography.size.S,
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: size.S,
    },
});
