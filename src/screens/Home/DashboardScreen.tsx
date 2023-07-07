import React, { useContext } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Container from '../../shared/components/Container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackLoginParamList } from '../../navigations/types';
import Header from '../../shared/components/Header';
import ItemCategory from '../../shared/components/ItemCategory';
import { typography } from '../../shared/utils/typography';
import { size } from '../../shared/utils/size';
import { ThemeContext } from '../../contexts/ThemeContext';
import CustomText from '../../shared/components/CustomText';
import useDashboard from '../../shared/hooks/useDashboard';
import { AuthContext } from '../../contexts/AuthContext';
import Loading from '../../shared/components/Loading';
import { colors } from '../../shared/utils/colors';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'DashboardScreen'> {}

const DashboardScreen = ({ navigation }: Props) => {
    const { themeApp } = useContext(ThemeContext);
    const { userData } = useContext(AuthContext);
    const { categories, isLoading } = useDashboard();

    if (isLoading) {
        return (
            <Container>
                <Loading />
            </Container>
        );
    }

    return (
        <Container>
            <Header
                title='Vet App'
                buttonRight
                iconRight='settings-outline'
                onPressRight={() => navigation.navigate('SettingScreen')}
            />
            <View style={styles.containerWelcome}>
                <CustomText style={[styles.welcomeText]}>Hola {userData?.user.name.split(' ')[0]}!</CustomText>
            </View>
            <FlatList
                numColumns={2}
                data={categories}
                renderItem={({ item }) => (
                    <ItemCategory
                        data={item.data}
                        icon={item.icon}
                        title={item.name}
                        onPress={() => navigation.navigate(item.page)}
                    />
                )}
                keyExtractor={(item) => String(item.id)}
            />
        </Container>
    );
};

export default DashboardScreen;

const styles = StyleSheet.create({
    welcomeText: {
        fontSize: typography.size.L,
        marginLeft: size.XL,
        marginBottom: size.XXL,
        fontWeight: '600',
    },
    containerWelcome: {
        marginBottom: size.XXL,
    },
});
