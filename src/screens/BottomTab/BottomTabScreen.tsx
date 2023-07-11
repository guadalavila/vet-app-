import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabStackParamList } from '../../navigations/types';
import DashboardScreen from '../Home/DashboardScreen';
import ClientsScreen from '../Clients/ClientsScreen';
import CustomTabBar from '../../shared/components/CustomTabBar';
import PetsScreen from '../Pets/PetsScreen';
import SettingScreen from '../Settings/SettingScreen';

const Tab = createBottomTabNavigator<BottomTabStackParamList>();

const BottomTabScreen = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={(props) => <CustomTabBar {...props} />}>
            <Tab.Screen name={'DashboardScreen'} component={DashboardScreen} options={{ tabBarLabel: 'Home' }} />
            <Tab.Screen name={'ClientsScreen'} component={ClientsScreen} options={{ tabBarLabel: 'Clientes' }} />
            <Tab.Screen name={'PetsScreen'} component={PetsScreen} options={{ tabBarLabel: 'Mascotas' }} />
            <Tab.Screen name={'SettingScreen'} component={SettingScreen} options={{ tabBarLabel: 'Configuración' }} />
        </Tab.Navigator>
    );
};

export default BottomTabScreen;
