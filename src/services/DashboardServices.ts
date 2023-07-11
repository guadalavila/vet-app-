import { Dashboard, DashboardResponse } from '../models/Dashboard';
import { API_PATHS } from '../shared/utils/apiPaths';
import networkManager from '../shared/utils/axios/NetworkManager';

class DashboardServices {
    constructor() {}

    getInitialData(): Promise<Dashboard> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<DashboardResponse>(API_PATHS.DASHBOARD)
                .then((res) => {
                    resolve(res.data.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}
const dashboardServices = new DashboardServices();
export default dashboardServices;
