import { ItemDashboard } from '~models/Dashboard';
import { API_PATHS } from '~shared/utils/apiPaths';
import networkManager from '~shared/utils/axios/NetworkManager';
import { logCrash } from '~shared/utils/firebase/crashlytics';

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
                    logCrash(error, 'DashboardServices => getInitialData()', 'GET');
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
                    logCrash(error, 'DashboardServices => getDashboard()', 'GET');
                    reject(error);
                });
        });
    }
}
const dashboardServices = new DashboardServices();
export default dashboardServices;
