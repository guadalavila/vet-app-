import { Report } from '../models/Report';
import { API_PATHS } from '~shared/utils/apiPaths';
import networkManager from '~shared/utils/axios/NetworkManager';
import { logCrash } from '~shared/utils/firebase/crashlytics';

class ReportServices {
    constructor() {}

    getReport(vetId: string): Promise<Report> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<Report>(API_PATHS.REPORT_BY_VET.concat(vetId))
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    logCrash(error, `ReportServices => getReport() with vetId: ${vetId}}`, 'GET');
                    reject(error);
                });
        });
    }
}
const reportServices = new ReportServices();
export default reportServices;
