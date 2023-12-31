import React, { useContext } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomText from './CustomText';
import { size } from '~shared/utils/size';
import { typography } from '~shared/utils/typography';
import { colors } from '~shared/utils/colors';
import { GlobalStyles } from '~shared/utils/styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '~contexts/ThemeContext';
import { Surgery } from '~models/Surgery';

interface IItemSurgeryProps {
    surgery: Surgery;
    onPress: () => void;
}

const ItemSurgery = ({ surgery, onPress }: IItemSurgeryProps) => {
    const { theme } = useContext(ThemeContext);
    return (
        <View style={[styles.container, GlobalStyles.row]}>
            <View style={styles.containerIcon}>
                <Image style={styles.icon} source={require('../../../assets/icon/surgery.png')} />
            </View>
            <View style={styles.containerInfo}>
                <CustomText style={[styles.name]}>
                    {new Date(surgery.date).toLocaleString('en-GB', {
                        hour12: false,
                    })}
                </CustomText>
                <CustomText style={[styles.name]}>{surgery.description}</CustomText>
                {surgery.medicines && <CustomText style={[styles.type]}>Medicinas: {surgery.medicines}</CustomText>}
                {surgery.notes && <CustomText style={[styles.type]}>Notas: {surgery.notes}</CustomText>}
            </View>
            <TouchableOpacity style={styles.containerButton} activeOpacity={0.7} onPress={onPress}>
                <Icon size={25} name='pencil' color={theme === 'dark' ? colors.light.white : colors.light.primary} />
            </TouchableOpacity>
        </View>
    );
};

export default ItemSurgery;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: size.XL,
        paddingVertical: size.M,
        borderBottomColor: colors.light.secondary,
        borderBottomWidth: 1,
    },
    containerInfo: {
        width: '78%',
        paddingRight: size.S,
    },
    name: {
        fontSize: typography.size.S,
        fontWeight: '600',
        marginVertical: size.S,
    },
    type: {
        marginVertical: size.S,
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
    icon: {
        width: 27,
        height: 27,
    },
    containerButton: {
        alignSelf: 'center',
    },
});
