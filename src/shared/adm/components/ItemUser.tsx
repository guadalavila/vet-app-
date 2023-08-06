import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';
import CustomText from '../../components/CustomText';
import { size } from '../../utils/size';
import { colors } from '../../utils/colors';
import { typography } from '../../utils/typography';
import { User } from '../../../models/User';
import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalStyles } from '../../utils/styles';

interface IItemVetProps {
    user: User;
    onPress: () => void;
}

const ItemUser = ({ user, onPress }: IItemVetProps) => {
    return (
        <TouchableOpacity style={[styles.container, GlobalStyles.row]} activeOpacity={0.7} onPress={onPress}>
            <View style={styles.containerIcon}>
                <Icon name='person-outline' size={30} color={colors.light.white} />
            </View>
            <View>
                <CustomText style={styles.text}>
                    {user.name} {user.lastName}
                </CustomText>
                {typeof user.vetId === 'object' && <CustomText style={styles.vet}>{user.vetId.name}</CustomText>}
                <CustomText style={styles.subtitle}>{user.email}</CustomText>
                <CustomText style={styles.subtitle}>{user.role}</CustomText>
            </View>
        </TouchableOpacity>
    );
};

export default ItemUser;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: size.XL,
        paddingVertical: size.M,
        borderBottomColor: colors.light.secondary,
        borderBottomWidth: 1,
    },
    text: {
        fontWeight: 'bold',
        fontSize: typography.size.S,
        marginVertical: size.S,
    },
    subtitle: {
        marginVertical: size.XS,
    },
    containerIcon: {
        backgroundColor: colors.light.primary,
        borderRadius: 30,
        alignSelf: 'center',
        marginRight: size.XXL,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    vet: {
        fontWeight: 'bold',
        marginVertical: size.S,
    },
});
