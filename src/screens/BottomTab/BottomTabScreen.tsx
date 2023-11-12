import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabStackParamList } from '~navigations/types';
import DashboardScreen from '~screens/Home/DashboardScreen';
import ClientsScreen from '~screens/Clients/ClientsScreen';
import CustomTabBar from '~shared/components/CustomTabBar';
import PetsScreen from '~screens/Pets/PetsScreen';
import SettingScreen from '~screens/Settings/SettingScreen';
import withVet from '~shared/hoc/withVet';

const Tab = createBottomTabNavigator<BottomTabStackParamList>();

const BottomTabScreen = ({ route }: any) => {
    return (
        <Tab.Navigator
            initialRouteName={route.params?.initialRouteName ?? 'DashboardScreen'}
            screenOptions={{ headerShown: false }}
            tabBar={(props) => <CustomTabBar {...props} />}>
            <Tab.Screen name={'DashboardScreen'} component={DashboardScreen} options={{ tabBarLabel: 'Home' }} />
            <Tab.Screen name={'ClientsScreen'} component={ClientsScreen} options={{ tabBarLabel: 'Clientes' }} />
            <Tab.Screen name={'PetsScreen'} component={PetsScreen} options={{ tabBarLabel: 'Mascotas' }} />
            <Tab.Screen name={'SettingScreen'} component={SettingScreen} options={{ tabBarLabel: 'Configuración' }} />
        </Tab.Navigator>
    );
};

export default withVet(BottomTabScreen);
