import React, { useCallback } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import Container from '~shared/components/Container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackLoginParamList } from '~navigations/types';
import Header from '~shared/components/Header';
import ItemCategory from '~shared/components/ItemCategory';
import { typography } from '~shared/utils/typography';
import { size } from '~shared/utils/size';
import CustomText from '~shared/components/CustomText';
import useDashboard from '~shared/hooks/useDashboard';
import SkeletonDashboard from '~shared/components/SkeletonDashboard';
import { GlobalStyles } from '~shared/utils/styles';
import useAuth from '~shared/hooks/useAuth';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'DashboardScreen'> {}

const DashboardScreen = ({ navigation }: Props) => {
    const { user } = useAuth();
    const { categories, isLoading, refreshDashboard, refreshing } = useDashboard();

    const onRefresh = useCallback(() => {
        refreshDashboard();
    }, []);

    if (isLoading || refreshing) {
        return (
            <Container>
                <Header title='Pawsome' />
                <View style={GlobalStyles.flex1}>
                    <SkeletonDashboard />
                </View>
            </Container>
        );
    }

    return (
        <Container>
            <Header title='Pawsome' />
            <View style={styles.containerWelcome}>
                <CustomText style={[styles.welcomeText]}>¡Hola {user?.name}!</CustomText>
            </View>
            <FlatList
                numColumns={2}
                data={categories}
                renderItem={({ item }) => (
                    <ItemCategory
                        data={item.count}
                        icon={item.icon}
                        height={item.height}
                        title={item.name}
                        onPress={() => navigation.navigate(item.page)}
                    />
                )}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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
