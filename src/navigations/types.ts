import { Client } from '../models/Client';
import { Pet } from '../models/Pet';

export type RootStackLogoutParamList = {
    LoginScreen: undefined;
};

export type RootStackLoginParamList = {
    DashboardScreen: undefined;
    ClientsScreen: undefined;
    ClientDetailScreen: { client: Client };
    PetsScreen: undefined;
    PetDetailScreen: { pet: Pet };
    SettingScreen: undefined;
    VisitsScreen: { id: string };
    AddVisitScreen: undefined;
    AddPetScreen: undefined;
};
