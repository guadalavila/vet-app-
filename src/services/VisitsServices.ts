import { LastVisits, NewVisit, NewVisitResponse, Visit, VisitDetailResponse, VisitResponse } from '../models/Visit';
import { API_PATHS } from '../shared/utils/apiPaths';
import networkManager from '../shared/utils/axios/NetworkManager';

class VisitsServices {
    constructor() {}

    getVisitsPet(idPet: string): Promise<Visit[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<VisitResponse>(API_PATHS.VISIT_PET.concat(idPet))
                .then((res) => {
                    resolve(res.data.data.visits);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    addVisit(visit: NewVisit): Promise<Visit> {
        return new Promise((resolve, reject) => {
            networkManager
                .post<NewVisitResponse>(API_PATHS.VISITS, visit)
                .then((res) => {
                    resolve(res.data.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    updateVisit(visit: any): Promise<Visit> {
        return new Promise((resolve, reject) => {
            networkManager
                .patch<VisitDetailResponse>(`${API_PATHS.VISITS}/${visit._id}`, visit)
                .then((res) => {
                    resolve(res.data.data.visit);
                })
                .catch((error) => {
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
