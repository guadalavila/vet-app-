import { LastVisits, NewVisit, NewVisitResponse, Visit, VisitDetailResponse, VisitResponse } from '../models/Visit';
import { API_PATHS } from '../shared/utils/apiPaths';
import networkManager from '../shared/utils/axios/NetworkManager';

class VisitsServices {
    constructor() {}

    getVisitsPet(petId: string): Promise<Visit[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<Visit[]>(API_PATHS.VISIT_BY_PET.concat(petId))
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    addVisit(visit: NewVisit): Promise<Visit> {
        return new Promise((resolve, reject) => {
            networkManager
                .post<Visit>(API_PATHS.VISITS, visit)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    updateVisit(visit: Visit): Promise<Visit> {
        return new Promise((resolve, reject) => {
            networkManager
                .patch<Visit>(API_PATHS.VISITS, visit)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    console.log(error);
                    reject(error);
                });
        });
    }

    getLastVisit(): Promise<LastVisits[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<LastVisits[]>(API_PATHS.LAST_VISIT)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}
const visitsServices = new VisitsServices();
export default visitsServices;
