import { Client } from '~models/Client';
import { Pet } from '~models/Pet';
import { Surgery } from '~models/Surgery';
import { User } from '~models/User';
import { Vaccine } from '~models/Vaccine';
import { Veterinary } from '~models/Veterinary';
import { Visit } from '~models/Visit';

export type RootStackLogoutParamList = {
    LoginScreen: undefined;
    SignUpScreen: undefined;
    OnBoardingScreen: undefined;
};

export type RootStackLoginParamList = {
    DashboardScreen: undefined;
    ClientsScreen: undefined;
    ClientDetailScreen: { client: Client; refresh?: boolean };
    PetsScreen: undefined;
    PetDetailScreen: { pet: Pet; getDetail: boolean; refresh?: boolean };
    SettingScreen: undefined;
    VisitsScreen: { id: string };
    AddVisitScreen: { pet: string; visit?: Visit };
    AddPetScreen: { client: Client | undefined; isUpdate: boolean; pet?: Pet };
    AddClientScreen: { isUpdate: boolean; client?: Client };
    VisitsListScreen: undefined;
    PathologiesScreen: undefined;
    BottomTabScreen: { initialRouteName?: string };
    SurgeryRegistryScreen: { petId: string };
    AddSurgeriesScreen: { petId: string; surgery?: Surgery };
    VaccinesRegistryScreen: { petId: string };
    AddVaccineScreen: { petId: string; vaccine?: Vaccine };
    ProfileScreen: undefined;
    ReportsScreen: undefined;
    OnBoardingScreen: undefined;
    ReportBugScreen: undefined;
};

export type BottomTabStackParamList = {
    DashboardScreen: undefined;
    ClientsScreen: undefined;
    PetsScreen: undefined;
    SettingScreen: undefined;
};

export type BottomTabAdminStackParamList = {
    VetsScreen: undefined;
    UsersScreen: undefined;
    AdministrationScreen: undefined;
};

export type AdminTabStackParamList = {
    BottomTabAdminScreen: undefined;
    AdministrationScreen: undefined;
    VetsScreen: undefined;
    UsersScreen: undefined;
    ProfileScreen: undefined;
    AddUserScreen: { user: User };
    AddVetScreen: { vet: Veterinary | undefined };
    VetDetailScreen: { vetId: string };
};

export type AppMaintenanceStackParamList = {
    MaintenanceScreen: undefined;
};
