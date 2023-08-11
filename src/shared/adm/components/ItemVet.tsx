import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import CustomText from '../../components/CustomText';
import { size } from '../../utils/size';
import { colors } from '../../utils/colors';
import { Veterinary } from '../../../models/Veterinary';
import { typography } from '../../utils/typography';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalStyles } from '../../utils/styles';
import { ThemeContext } from '../../../contexts/ThemeContext';

interface IItemVetProps {
    vet: Veterinary;
    onPress: () => void;
    onPressEdit: () => void;
}

const ItemVet = ({ vet, onPress, onPressEdit }: IItemVetProps) => {
    const { theme } = useContext(ThemeContext);

    return (
        <View style={[styles.container, GlobalStyles.row]}>
            <TouchableOpacity activeOpacity={0.7} style={[GlobalStyles.row]} onPress={onPress}>
                <View style={styles.containerIcon}>
                    <Icon name='home-outline' size={30} color={colors.light.white} />
                </View>
                <View style={styles.containerInfo}>
                    <CustomText style={styles.text}>{vet.name}</CustomText>
                    <CustomText style={styles.subtitle}>{vet.address}</CustomText>
                    <CustomText style={styles.subtitle}>
                        {vet.city} - {vet.codePostal}
                    </CustomText>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerButton} activeOpacity={0.7} onPress={onPressEdit}>
                <Icon size={25} name='pencil' color={theme === 'dark' ? colors.light.white : colors.light.primary} />
            </TouchableOpacity>
        </View>
    );
};

export default ItemVet;

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
    containerButton: {
        alignSelf: 'center',
    },
    containerInfo: {
        width: '78%',
        paddingRight: size.S,
    },
});
