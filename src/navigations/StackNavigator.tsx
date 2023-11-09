import React from 'react';
import { AdminTabStackParamList, RootStackLoginParamList, RootStackLogoutParamList } from './types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '~screens/Login/LoginScreen';
import DashboardScreen from '~screens/Home/DashboardScreen';
import ClientsScreen from '~screens/Clients/ClientsScreen';
import ClientDetailScreen from '~screens/Clients/ClientDetailScreen';
import PetsScreen from '~screens/Pets/PetsScreen';
import PetDetailScreen from '~screens/Pets/PetDetailScreen';
import SettingScreen from '~screens/Settings/SettingScreen';
import VisitsScreen from '~screens/Visit/VisitsScreen';
import AddVisitScreen from '~screens/Visit/AddVisitScreen';
import AddPetScreen from '~screens/Pets/AddPetScreen';
import AddClientScreen from '~screens/Clients/AddClientScreen';
import VisitsListScreen from '~screens/Visit/VisitsListScreen';
import BottomTabScreen from '~screens/BottomTab/BottomTabScreen';
import SurgeryRegistryScreen from '~screens/Pets/SurgeryRegistryScreen';
import AddSurgeriesScreen from '~screens/Pets/AddSurgeriesScreen';
import VaccinesRegistryScreen from '~screens/Pets/VaccinesRegistryScreen';
import AddVaccineScreen from '~screens/Pets/AddVaccineScreen';
import SignUpScreen from '~screens/Login/SignUpScreen';
import PathologiesScreen from '~screens/Pathologies/PathologiesScreen';
import ProfileScreen from '~screens/Settings/ProfileScreen';
import ReportsScreen from '~screens/Report/ReportsScreen';
import OnBoardingScreen from '~screens/OnBoarding/OnBoardingScreen';
import AdministrationScreen from '~screens/Administration/AdministrationScreen';
import BottomTabAdminScreen from '~screens/BottomTab/BottomTabAdminScreen';
import AddUserScreen from '~screens/Administration/Users/AddUserScreen';
import AddVetScreen from '~screens/Administration/Vets/AddVetScreen';
import VetDetailScreen from '~screens/Administration/Vets/VetDetailScreen';

const StackLoggedOut = createNativeStackNavigator<RootStackLogoutParamList>();
const StackLoggedIn = createNativeStackNavigator<RootStackLoginParamList>();
const StackAdmin = createNativeStackNavigator<AdminTabStackParamList>();

export function StackNavigatorLogOut() {
    return (
        <StackLoggedOut.Navigator initialRouteName={'LoginScreen'} screenOptions={{ headerShown: false }}>
            <StackLoggedOut.Screen name={'LoginScreen'} component={LoginScreen} />
            <StackLoggedOut.Screen name={'SignUpScreen'} component={SignUpScreen} />
            <StackLoggedOut.Screen name={'OnBoardingScreen'} component={OnBoardingScreen} />
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
            <StackLoggedIn.Screen name={'PathologiesScreen'} component={PathologiesScreen} />
            <StackLoggedIn.Screen name={'SurgeryRegistryScreen'} component={SurgeryRegistryScreen} />
            <StackLoggedIn.Screen name={'AddSurgeriesScreen'} component={AddSurgeriesScreen} />
            <StackLoggedIn.Screen name={'VaccinesRegistryScreen'} component={VaccinesRegistryScreen} />
            <StackLoggedIn.Screen name={'AddVaccineScreen'} component={AddVaccineScreen} />
            <StackLoggedIn.Screen name={'ProfileScreen'} component={ProfileScreen} />
            <StackLoggedIn.Screen name={'ReportsScreen'} component={ReportsScreen} />
            <StackLoggedIn.Screen name={'OnBoardingScreen'} component={OnBoardingScreen} />
        </StackLoggedIn.Navigator>
    );
}

export function StackNavigatorAdmin() {
    return (
        <StackAdmin.Navigator screenOptions={{ headerShown: false }} initialRouteName='BottomTabAdminScreen'>
            <StackAdmin.Screen name={'BottomTabAdminScreen'} component={BottomTabAdminScreen} />
            <StackAdmin.Screen name={'AdministrationScreen'} component={AdministrationScreen} />
            <StackAdmin.Screen name={'ProfileScreen'} component={ProfileScreen} />
            <StackAdmin.Screen name={'AddUserScreen'} component={AddUserScreen} />
            <StackAdmin.Screen name={'AddVetScreen'} component={AddVetScreen} />
            <StackAdmin.Screen name={'VetDetailScreen'} component={VetDetailScreen} />
        </StackAdmin.Navigator>
    );
}
