import React from 'react';
import { RootStackLoginParamList, RootStackLogoutParamList } from './types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login/LoginScreen';
import DashboardScreen from '../screens/Home/DashboardScreen';
import ClientsScreen from '../screens/Clients/ClientsScreen';
import ClientDetailScreen from '../screens/Clients/ClientDetailScreen';
import PetsScreen from '../screens/Pets/PetsScreen';
import PetDetailScreen from '../screens/Pets/PetDetailScreen';

const StackLoggedOut = createNativeStackNavigator<RootStackLogoutParamList>();
const StackLoggedIn = createNativeStackNavigator<RootStackLoginParamList>();

export function StackNavigatorLogOut() {
    return (
        <StackLoggedOut.Navigator screenOptions={{ headerShown: false }}>
            <StackLoggedOut.Screen name={'LoginScreen'} component={LoginScreen} />
        </StackLoggedOut.Navigator>
    );
}

export function StackNavigatorLogIn() {
    return (
        <StackLoggedIn.Navigator screenOptions={{ headerShown: false }}>
            <StackLoggedIn.Screen name={'DashboardScreen'} component={DashboardScreen} />
            <StackLoggedIn.Screen name={'ClientsScreen'} component={ClientsScreen} />
            <StackLoggedIn.Screen name={'ClientDetailScreen'} component={ClientDetailScreen} />
            <StackLoggedIn.Screen name={'PetsScreen'} component={PetsScreen} />
            <StackLoggedIn.Screen name={'PetDetailScreen'} component={PetDetailScreen} />
        </StackLoggedIn.Navigator>
    );
}
