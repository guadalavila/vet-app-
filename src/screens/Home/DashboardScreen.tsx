import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Container from '../../shared/components/Container';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackLoginParamList } from '../../navigations/types';
import Header from '../../shared/components/Header';
import ItemCategory from '../../shared/components/ItemCategory';
import { CATEGORIES } from '../../shared/utils/constants';

interface Props extends NativeStackScreenProps<RootStackLoginParamList, 'DashboardScreen'> {}

const DashboardScreen = ({ navigation }: Props) => {
    return (
        <Container>
            <Header
                title='Vet App'
                buttonRight
                iconRight='settings-outline'
                onPressRight={() => navigation.navigate('SettingScreen')}
            />
            <FlatList
                numColumns={2}
                data={CATEGORIES}
                renderItem={({ item }) => (
                    <ItemCategory icon={item.icon} title={item.name} onPress={() => navigation.navigate(item.page)} />
                )}
                keyExtractor={(item) => String(item.id)}
            />
        </Container>
    );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
