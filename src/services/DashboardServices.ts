import { ItemDashboard } from '../models/Dashboard';
import { API_PATHS } from '../shared/utils/apiPaths';
import networkManager from '../shared/utils/axios/NetworkManager';

class DashboardServices {
    constructor() {}

    getInitialData(): Promise<ItemDashboard[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<ItemDashboard[]>(API_PATHS.DASHBOARD)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    getDashboard(vetId: string): Promise<ItemDashboard[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<ItemDashboard[]>(`${API_PATHS.DASHBOARD}/by-vet/${vetId}`)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}
const dashboardServices = new DashboardServices();
export default dashboardServices;
