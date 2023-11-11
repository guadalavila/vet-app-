import React from 'react';
import { StyleSheet, View } from 'react-native';
import Container from '~shared/components/Container';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '~shared/utils/colors';
import CustomText from '~shared/components/CustomText';
import { typography } from '~shared/utils/typography';
import { size } from '~shared/utils/size';
import { GlobalStyles } from '~shared/utils/styles';

const MaintenanceScreen = () => {
    return (
        <Container>
            <View style={[GlobalStyles.flexCenter]}>
                <View style={styles.icon}>
                    <Icon testID='icon' name={'settings-outline'} size={80} color={colors.light.greyDark} />
                </View>
                <CustomText style={styles.title}>Estamos en mantenimiento..</CustomText>
                <CustomText style={styles.subtitle}>
                    En estos momentos estamos trabajando, por favor, intentá en unos minutos.
                </CustomText>
            </View>
        </Container>
    );
};

export default MaintenanceScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: typography.size.XL,
        fontWeight: 'bold',
        color: colors.light.greyDark,
        textAlign: 'center',
        marginVertical: size.XXXL,
    },
    subtitle: {
        marginTop: size.XXXL,
        fontSize: typography.size.S,
        fontWeight: '500',
        justifyContent: 'center',
        alignSelf: 'center',
        color: colors.light.greyDarkSecondary,
        textAlign: 'center',
        marginVertical: size.XXXL,
        marginHorizontal: size.XL,
    },
    icon: {
        alignSelf: 'center',
        marginBottom: size.XXXL,
    },
});
