import { Client } from '../models/Client';
import { Pet } from '../models/Pet';
import { Vaccine } from '../models/Vaccine';
import { Visit } from '../models/Visit';

export type RootStackLogoutParamList = {
    LoginScreen: undefined,
    SignUpScreen: undefined,
};

export type RootStackLoginParamList = {
    DashboardScreen: undefined,
    ClientsScreen: undefined,
    ClientDetailScreen: { client: Client, refresh?: boolean },
    PetsScreen: undefined,
    PetDetailScreen: { pet: Pet, getDetail: boolean, refresh?: boolean },
    SettingScreen: undefined,
    VisitsScreen: { id: string },
    AddVisitScreen: { pet: string, visit?: Visit },
    AddPetScreen: { client: Client | undefined, isUpdate: boolean, pet?: Pet },
    AddClientScreen: { isUpdate: boolean, client?: Client },
    VisitsListScreen: undefined,
    PathologiesScreen: undefined,
    BottomTabScreen: { initialRouteName?: string },
    SurgeryRegistryScreen: undefined,
    AddSurgeriesScreen: undefined,
    VaccinesRegistryScreen: { petId: string },
    AddVaccineScreen: { petId: string, vaccine?: Vaccine },
    ProfileScreen: undefined,
    ReportsScreen: undefined,
};

export type BottomTabStackParamList = {
    DashboardScreen: undefined,
    ClientsScreen: undefined,
    PetsScreen: undefined,
    SettingScreen: undefined,
};
