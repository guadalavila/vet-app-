import { Client } from '../models/Client';
import { Pet } from '../models/Pet';
import { Visit } from '../models/Visit';

export type RootStackLogoutParamList = {
    LoginScreen: undefined,
};

export type RootStackLoginParamList = {
    DashboardScreen: undefined,
    ClientsScreen: undefined,
    ClientDetailScreen: { client: Client, refresh?: boolean },
    PetsScreen: undefined,
    PetDetailScreen: { pet: Pet, refresh?: boolean },
    SettingScreen: undefined,
    VisitsScreen: { id: string },
    AddVisitScreen: { client: string, pet: string, visit?: Visit },
    AddPetScreen: { client: Client | undefined, isUpdate: boolean, pet?: Pet },
    AddClientScreen: { isUpdate: boolean, client?: Client },
    VisitsListScreen: undefined,
    ConditionsScreen: undefined,
    BottomTabScreen: { initialRouteName?: string },
    SurgeryRegistryScreen: undefined,
    AddSurgeriesScreen: undefined,
    VaccinesRegistryScreen: undefined,
    AddVaccineScreen: undefined,
};

export type BottomTabStackParamList = {
    DashboardScreen: undefined,
    ClientsScreen: undefined,
    PetsScreen: undefined,
    SettingScreen: undefined,
};
