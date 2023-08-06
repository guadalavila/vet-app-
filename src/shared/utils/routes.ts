export const getIconByRoute = (route: string) => {
    switch (route) {
        case 'DashboardScreen':
            return 'home-outline';
        case 'ClientsScreen':
            return 'people-outline';
        case 'PetsScreen':
            return 'paw-outline';
        case 'SettingScreen':
            return 'settings-outline';
        case 'AdministrationScreen':
            return 'construct-outline';
        case 'VetsScreen':
            return 'construct-outline';
        case 'UsersScreen':
            return 'people-outline';
    }
};
