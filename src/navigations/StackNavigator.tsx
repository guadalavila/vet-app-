import React from 'react';
import { RootStackLoginParamList, RootStackLogoutParamList } from './types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login/LoginScreen';
import DashboardScreen from '../screens/Home/DashboardScreen';
import ClientsScreen from '../screens/Clients/ClientsScreen';
import ClientDetailScreen from '../screens/Clients/ClientDetailScreen';
import PetsScreen from '../screens/Pets/PetsScreen';
import PetDetailScreen from '../screens/Pets/PetDetailScreen';
import SettingScreen from '../screens/Settings/SettingScreen';
import VisitsScreen from '../screens/Visit/VisitsScreen';
import AddVisitScreen from '../screens/Visit/AddVisitScreen';
import AddPetScreen from '../screens/Pets/AddPetScreen';
import AddClientScreen from '../screens/Clients/AddClientScreen';
import VisitsListScreen from '../screens/Visit/VisitsListScreen';
import ConditionsScreen from '../screens/Conditions/ConditionsScreen';
import BottomTabScreen from '../screens/BottomTab/BottomTabScreen';
import SurgeryRegistryScreen from '../screens/Pets/SurgeryRegistryScreen';
import AddSurgeriesScreen from '../screens/Pets/AddSurgeriesScreen';
import VaccinesRegistryScreen from '../screens/Pets/VaccinesRegistryScreen';
import AddVaccineScreen from '../screens/Pets/AddVaccineScreen';

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
        <StackLoggedIn.Navigator screenOptions={{ headerShown: false }} initialRouteName='BottomTabScreen'>
            <StackLoggedIn.Screen name={'BottomTabScreen'} component={BottomTabScreen} />
            <StackLoggedIn.Screen name={'DashboardScreen'} component={DashboardScreen} />
            <StackLoggedIn.Screen name={'ClientsScreen'} component={ClientsScreen} />
            <StackLoggedIn.Screen name={'ClientDetailScreen'} component={ClientDetailScreen} />
            <StackLoggedIn.Screen name={'PetsScreen'} component={PetsScreen} />
            <StackLoggedIn.Screen name={'PetDetailScreen'} component={PetDetailScreen} />
            <StackLoggedIn.Screen name={'SettingScreen'} component={SettingScreen} />
            <StackLoggedIn.Screen name={'VisitsScreen'} component={VisitsScreen} />
            <StackLoggedIn.Screen name={'AddVisitScreen'} component={AddVisitScreen} />
            <StackLoggedIn.Screen name={'AddPetScreen'} component={AddPetScreen} />
            <StackLoggedIn.Screen name={'AddClientScreen'} component={AddClientScreen} />
            <StackLoggedIn.Screen name={'VisitsListScreen'} component={VisitsListScreen} />
            <StackLoggedIn.Screen name={'ConditionsScreen'} component={ConditionsScreen} />
            <StackLoggedIn.Screen name={'SurgeryRegistryScreen'} component={SurgeryRegistryScreen} />
            <StackLoggedIn.Screen name={'AddSurgeriesScreen'} component={AddSurgeriesScreen} />
            <StackLoggedIn.Screen name={'VaccinesRegistryScreen'} component={VaccinesRegistryScreen} />
            <StackLoggedIn.Screen name={'AddVaccineScreen'} component={AddVaccineScreen} />
        </StackLoggedIn.Navigator>
    );
}
