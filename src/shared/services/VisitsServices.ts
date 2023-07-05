import { Visit, VisitResponse } from '../../models/Visit';
import { API_PATHS } from '../utils/apiPaths';
import networkManager from '../utils/axios/NetworkManager';

class VisitsServices {
    constructor() {}

    getVisitsPet(idPet: string): Promise<Visit[]> {
        return new Promise((resolve, reject) => {
            networkManager
                .get<VisitResponse>(API_PATHS.VISIT_PET.concat(idPet))
                .then((res) => {
                    console.log(res.data.data.visits);
                    resolve(res.data.data.visits);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
}
const visitsServices = new VisitsServices();
export default visitsServices;
