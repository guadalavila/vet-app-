import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';
import CustomText from '../../components/CustomText';
import { size } from '../../utils/size';
import { colors } from '../../utils/colors';
import { typography } from '../../utils/typography';
import { User } from '../../../models/User';
import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalStyles } from '../../utils/styles';
import { ThemeContext } from '../../../contexts/ThemeContext';

interface IItemVetProps {
    user: User;
    onPress: () => void;
}

const ItemUser = ({ user, onPress }: IItemVetProps) => {
    const { theme } = useContext(ThemeContext);
    return (
        <View style={[styles.container, GlobalStyles.row]}>
            <View style={styles.containerIcon}>
                <Icon name='person-outline' size={30} color={colors.light.white} />
            </View>
            <View style={styles.containerInfo}>
                <View style={GlobalStyles.row}>
                    <CustomText style={styles.text}>
                        {user.name} {user.lastName}
                    </CustomText>
                    <View style={styles.status}>
                        <Icon
                            name={user.vetId ? 'checkmark-outline' : 'warning-outline'}
                            size={22}
                            color={user.vetId ? colors.light.success : colors.light.error}
                        />
                    </View>
                </View>
                {typeof user.vetId === 'object' && <CustomText style={styles.vet}>{user.vetId.name}</CustomText>}
                <CustomText style={styles.subtitle}>{user.email}</CustomText>
                <CustomText style={styles.subtitle}>{user.role}</CustomText>
            </View>
            <TouchableOpacity style={styles.containerButton} activeOpacity={0.7} onPress={onPress}>
                <Icon size={25} name='pencil' color={theme === 'dark' ? colors.light.white : colors.light.primary} />
            </TouchableOpacity>
        </View>
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
    containerButton: {
        alignSelf: 'center',
    },
    containerInfo: {
        width: '78%',
        paddingRight: size.S,
    },
    status: {
        marginHorizontal: size.XXL,
    },
});
