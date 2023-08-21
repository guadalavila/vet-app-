import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabAdminStackParamList } from '~navigations/types';
import CustomTabBar from '~shared/components/CustomTabBar';
import VetsScreen from '~screens/Administration/Vets/VetsScreen';
import UsersScreen from '~screens/Administration/Users/UsersScreen';
import AdministrationScreen from '~screens/Administration/AdministrationScreen';

const Tab = createBottomTabNavigator<BottomTabAdminStackParamList>();

const BottomTabAdminScreen = ({ route }: any) => {
    return (
        <Tab.Navigator
            initialRouteName={'VetsScreen'}
            screenOptions={{ headerShown: false }}
            tabBar={(props) => <CustomTabBar {...props} />}>
            <Tab.Screen name={'VetsScreen'} component={VetsScreen} options={{ tabBarLabel: 'Vets' }} />
            <Tab.Screen name={'UsersScreen'} component={UsersScreen} options={{ tabBarLabel: 'Usuarios' }} />
            <Tab.Screen
                name={'AdministrationScreen'}
                component={AdministrationScreen}
                options={{ tabBarLabel: 'Adm' }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabAdminScreen;
