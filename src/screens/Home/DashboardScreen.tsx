import React, { useContext } from 'react';
import { FlatList, StyleSheet } from 'react-native';
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

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'DashboardScreen'> {}

const DashboardScreen = ({ navigation }: Props) => {
    const { themeApp } = useContext(ThemeContext);
    const { userData } = useContext(AuthContext);
    const { categories } = useDashboard();

    return (
        <Container>
            <Header
                title='Vet App'
                buttonRight
                iconRight='settings-outline'
                onPressRight={() => navigation.navigate('SettingScreen')}
            />
            <CustomText style={[styles.welcomeText, { color: themeApp.colors.secondary }]}>
                Hola {userData?.user.name}!
            </CustomText>
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
    },
});
