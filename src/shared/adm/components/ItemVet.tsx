import React from 'react';
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

interface IItemVetProps {
    vet: Veterinary;
    onPress: () => void;
}

const ItemVet = ({ vet, onPress }: IItemVetProps) => {
    return (
        <TouchableOpacity style={[styles.container, GlobalStyles.row]} activeOpacity={0.7} onPress={onPress}>
            <View style={styles.containerIcon}>
                <Icon name='home' size={30} color={colors.light.white} />
            </View>
            <View>
                <CustomText style={styles.text}>{vet.name}</CustomText>
                <CustomText style={styles.subtitle}>{vet.address}</CustomText>
                <CustomText style={styles.subtitle}>{vet.city}</CustomText>
            </View>
        </TouchableOpacity>
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
});
