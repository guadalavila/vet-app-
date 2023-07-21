// export type Dashboard = {
//     clients: ItemDashboard,
//     pets: ItemDashboard,
//     visits: ItemDashboard,
// };

export type ItemDashboard = {
    id: number,
    name: string,
    page: 'ClientsScreen' | 'PetsScreen' | 'VisitsListScreen',
    icon: string,
    count: number,
    height?: number,
};
